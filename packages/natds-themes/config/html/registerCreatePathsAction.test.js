import fs from 'fs';
import registerCreatePathsAction, { createPaths, deletePaths } from './registerCreatePathsAction';
import * as createOutputPathInfo from '../shared/createOutputPathInfo';

jest.mock('fs');

describe('registerCreatePathsAction', () => {
  it('should return create paths action', () => {
    const createPathsAction = registerCreatePathsAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_paths_html');
  });

  describe('createPaths', () => {
    it('should call createOutputPathInfo function', () => {
      const sampleConfig = {
        buildPath: 'build/html/brand/',
        files: [{ destination: 'mode.html' }],
      };

      jest.spyOn(createOutputPathInfo, 'createOutputPathInfo');

      createPaths(null, sampleConfig);

      expect(createOutputPathInfo.createOutputPathInfo).toHaveBeenCalled();
    });
  });

  describe('deletePaths', () => {
    it('should delete the html docs paths file', () => {
      deletePaths();

      expect(fs.unlinkSync).toHaveBeenCalledWith('build/html/paths.json');
    });
  });
});
