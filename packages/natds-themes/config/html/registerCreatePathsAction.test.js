import fs from 'fs';
import registerCreatePathsAction, { createPaths, deletePaths } from './registerCreatePathsAction';

jest.mock('fs');

describe('registerCreatePathsAction', () => {
  it('should return create paths action', () => {
    const createPathsAction = registerCreatePathsAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_paths_html');
  });

  describe('createPaths', () => {
    it('should create html docs paths file', () => {
      const expectedFile = [
        {
          name: 'brand mode',
          path: '/brand/mode.html',
        },
      ];

      const sampleConfig = {
        buildPath: 'build/html/brand/',
        files: [{ destination: 'mode.html' }],
      };

      fs.existsSync.mockReturnValue(false);

      createPaths(null, sampleConfig);

      expect(fs.writeFileSync).toHaveBeenCalledWith('build/html/paths.json', JSON.stringify(expectedFile));
    });
  });

  describe('deletePaths', () => {
    it('should delete the html docs paths file', () => {

      deletePaths();

      expect(fs.unlinkSync).toHaveBeenCalledWith('build/html/paths.json');
    });
  });
});
