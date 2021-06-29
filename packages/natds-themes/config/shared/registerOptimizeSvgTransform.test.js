import fs from 'fs';
import path from 'path';
import svgo from 'svgo';
import { registerOptimizeSvgTransform } from './registerOptimizeSvgTransform';
import * as helpers from './helpers';

jest.mock('fs');
jest.mock('path');
jest.mock('svgo');

const mockSvg = '<svg><image xlink:href="data:image/png;base64,something"/></svg>';

describe('registerOpitimizeSvgTransform', () => {
  describe('transformer', () => {
    beforeEach(() => {
      path.join.mockReturnValue('a/path/natura-a-official');
    });

    it('should return the optimized svg content as string replacing embeded image with external url', () => {
      const reduceSpy = jest.fn().mockReturnValue('<svg><image xlink:href="http://natura-embed-image-0.png"/></svg>');
      const convertToBase64Spy = jest.spyOn(helpers, 'convertBase64ToExternalImage').mockReturnValue(reduceSpy);
      const execPatternSpy = jest.spyOn(helpers, 'execPattern').mockReturnValue([{ imageData: 'data:image/png;base64,something' }]);
      const readAssetSpy = jest.spyOn(helpers, 'readAsset').mockReturnValue('natura-a-official.svg');

      svgo.optimize.mockReturnValue({ data: mockSvg });

      const config = registerOptimizeSvgTransform();
      const token = { original: { value: 'natura-a-official' } };

      const expectedResult = 'natura-a-official-optimized';
      const result = config.transformer(token);
      const pattern = 'data:image/png;base64,(?<imageData>[^"\']+)';

      expect(result).toEqual(expectedResult);
      expect(readAssetSpy).toHaveBeenCalledWith('natura-a-official.svg');
      expect(svgo.optimize).toHaveBeenCalledWith('natura-a-official.svg', expect.any(Object));
      expect(convertToBase64Spy).toHaveBeenCalledWith(token.original.value);
      expect(reduceSpy).toHaveBeenCalledWith(mockSvg, { imageData: 'data:image/png;base64,something' }, 0, [{ imageData: 'data:image/png;base64,something' }]);
      expect(execPatternSpy).toHaveBeenCalledWith(pattern, mockSvg);
      expect(fs.writeFileSync).toHaveBeenCalledWith('a/path/natura-a-official.svg', '<svg><image xlink:href="http://natura-embed-image-0.png"/></svg>');
    });
    it('should return the optimized svg content as string', () => {
      const execPatternSpy = jest.spyOn(helpers, 'execPattern').mockReturnValue([]);
      const readAssetSpy = jest.spyOn(helpers, 'readAsset').mockReturnValue('natura-a-official.svg');

      svgo.optimize.mockReturnValue({ data: mockSvg });

      const config = registerOptimizeSvgTransform();
      const token = { original: { value: 'natura-a-official' } };

      const expectedResult = 'natura-a-official-optimized';
      const result = config.transformer(token);
      const pattern = 'data:image/png;base64,(?<imageData>[^"\']+)';

      expect(result).toEqual(expectedResult);
      expect(readAssetSpy).toHaveBeenCalledWith('natura-a-official.svg');
      expect(svgo.optimize).toHaveBeenCalledWith('natura-a-official.svg', expect.any(Object));
      expect(execPatternSpy).toHaveBeenCalledWith(pattern, mockSvg);
      expect(fs.writeFileSync).toHaveBeenCalledWith('a/path/natura-a-official.svg', mockSvg);
    });
  });
});
