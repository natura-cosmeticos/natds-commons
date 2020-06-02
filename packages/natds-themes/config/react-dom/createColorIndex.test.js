import fs from 'fs';
import { createColorIndex } from './createColorIndex';
import * as compileTemplate from '../shared/templateHelpers';

jest.mock('fs');

describe('createColorIndex', () => {
  it('should create token paths file', () => {
    const mockPathsFile = [{
      name: 'avonLightColorTokens',
      path: '/avon/light.json',
    }];

    const templateSpy = jest.fn(() => 'A template');

    jest
      .spyOn(compileTemplate, 'compileTemplate')
      .mockImplementation(() => templateSpy);

    fs
      .readFileSync
      .mockReturnValue(JSON.stringify(mockPathsFile));

    createColorIndex();

    expect(templateSpy).toHaveBeenCalledWith({ paths: mockPathsFile });
    expect(fs.readFileSync).toHaveBeenCalled();
    expect(fs.writeFileSync).toHaveBeenCalledWith('./build/react-dom/index.js', 'A template');
  });
});
