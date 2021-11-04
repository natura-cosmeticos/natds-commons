import fs from 'fs';
import svg2vectordrawable from 'svg2vectordrawable/lib/svg-file-to-vectordrawable-file';
import webp from 'webp-converter';
import {
  registerConvertDrawablesAction, buildDrawablesPaths, buildImagePaths,
} from './registerConvertDrawablesAction';

jest.mock('fs');
jest.mock('svg2vectordrawable/lib/svg-file-to-vectordrawable-file');
jest.mock('webp-converter');

const customAssetProps = {
  filePath: 'properties/brands/aesop/asset-dark.json',
  original: { value: 'aesop-a-custom' },
  path: ['asset', 'brand', 'custom', 'a', 'file'],
  value: 'aesop_a_custom',
};

const neutralAssetProps = {
  filePath: 'properties/brands/aesop/asset-light.json',
  original: { value: 'aesop-a-official' },
  path: ['asset', 'brand', 'neutral', 'b', 'file'],
  value: 'aesop_a_official',
};

describe('registerConvertDrawablesAction', () => {
  describe('buildDrawablesPaths', () => {
    it('should return the paths for drawables', () => {
      const result = buildDrawablesPaths(customAssetProps, 'some/path');
      const expected = [{
        input: 'assets/aesop-a-custom.svg',
        output: 'some/path/drawables/aesop_a_custom.xml',
        outputDir: 'some/path/drawables',
      }];

      expect(result).toEqual(expected);
    });
  });

  describe('buildImagePaths', () => {
    it('should return the paths for images', () => {
      const result = buildImagePaths(neutralAssetProps, 'some/path');
      const expected = [
        {
          input: 'assets/aesop-a-official.png',
          output: 'some/path/aesop_a_official.webp',
          outputDir: 'some/path',
        },
        {
          input: 'assets/1.5x/aesop-a-official.png',
          output: 'some/path/1.5x/aesop_a_official.webp',
          outputDir: 'some/path/1.5x',
        },
        {
          input: 'assets/2x/aesop-a-official.png',
          output: 'some/path/2x/aesop_a_official.webp',
          outputDir: 'some/path/2x',
        },
        {
          input: 'assets/3x/aesop-a-official.png',
          output: 'some/path/3x/aesop_a_official.webp',
          outputDir: 'some/path/3x',
        },
        {
          input: 'assets/4x/aesop-a-official.png',
          output: 'some/path/4x/aesop_a_official.webp',
          outputDir: 'some/path/4x',
        }];

      expect(result).toEqual(expected);
    });
  });

  describe('convertDrawables', () => {
    it('should return convert drawables action', () => {
      const convertDrawablesAction = registerConvertDrawablesAction();

      expect(typeof convertDrawablesAction.do).toBe('function');
      expect(typeof convertDrawablesAction.undo).toBe('function');
      expect(convertDrawablesAction.name).toEqual('convert_drawables');
    });

    it('should ', () => {
      const convertDrawablesAction = registerConvertDrawablesAction();
      const dictionary = { allTokens: [customAssetProps, neutralAssetProps] };

      convertDrawablesAction.do(dictionary, { buildPath: 'some/path/' });

      expect(svg2vectordrawable).toHaveBeenCalledWith('assets/aesop-a-custom.svg', 'some/path/assets/drawables/aesop_a_custom.xml');
      expect(webp.cwebp).toHaveBeenNthCalledWith(1, 'assets/aesop-a-official.png', 'some/path/assets/aesop_a_official.webp', '-q 80');
      expect(webp.cwebp).toHaveBeenNthCalledWith(2, 'assets/1.5x/aesop-a-official.png', 'some/path/assets/1.5x/aesop_a_official.webp', '-q 80');
      expect(webp.cwebp).toHaveBeenNthCalledWith(3, 'assets/2x/aesop-a-official.png', 'some/path/assets/2x/aesop_a_official.webp', '-q 80');
      expect(webp.cwebp).toHaveBeenNthCalledWith(4, 'assets/3x/aesop-a-official.png', 'some/path/assets/3x/aesop_a_official.webp', '-q 80');
      expect(webp.cwebp).toHaveBeenNthCalledWith(5, 'assets/4x/aesop-a-official.png', 'some/path/assets/4x/aesop_a_official.webp', '-q 80');
    });
  });

  describe('removeDrawables', () => {
    it('should ', () => {
      const convertDrawablesAction = registerConvertDrawablesAction();
      const dictionary = { allTokens: [customAssetProps, neutralAssetProps] };

      convertDrawablesAction.undo(dictionary, { buildPath: 'some/path/' });

      expect(fs.unlinkSync).toHaveBeenNthCalledWith(1, 'some/path/assets/drawables/aesop_a_custom.xml');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(2, 'some/path/assets/aesop_a_official.webp');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(3, 'some/path/assets/1.5x/aesop_a_official.webp');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(4, 'some/path/assets/2x/aesop_a_official.webp');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(5, 'some/path/assets/3x/aesop_a_official.webp');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(6, 'some/path/assets/4x/aesop_a_official.webp');
    });
  });
});
