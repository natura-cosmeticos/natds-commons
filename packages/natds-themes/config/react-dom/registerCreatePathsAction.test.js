import fs from 'fs';
import registerCreatePathsAction, { createPaths, deletePaths } from './registerCreatePathsAction';

jest.mock('fs');

describe('registerCreatePathsAction', () => {
  it('should return create paths action', () => {
    const createPathsAction = registerCreatePathsAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_paths_react_dom');
  });

  describe('createPaths', () => {
    it('should create index paths file when the file does not exists', () => {
      const expectedFile = [
        {
          name: 'brandModeColorTokens',
          path: '/brand/mode.html',
        },
      ];

      const sampleConfig = {
        buildPath: 'build/react-dom/brand/',
        files: [{ destination: 'mode.html' }],
      };

      fs.existsSync.mockReturnValue(false);

      createPaths(null, sampleConfig);

      expect(fs.writeFileSync).toHaveBeenCalledWith('build/react-dom/paths.json', JSON.stringify(expectedFile));
    });
  });

  it('should create index paths file when the file exists', () => {
    const existingFile = [{
      name: 'otherBrandModeColorTokens',
      path: '/otherBrand/mode.json',
    }];

    const expectedFile = [
      ...existingFile,
      {
        name: 'brandModeColorTokens',
        path: '/brand/mode.html',
      },
    ];

    const sampleConfig = {
      buildPath: 'build/react-dom/brand/',
      files: [{ destination: 'mode.html' }],
    };

    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(JSON.stringify(existingFile));

    createPaths(null, sampleConfig);

    expect(fs.writeFileSync).toHaveBeenNthCalledWith(2, 'build/react-dom/paths.json', JSON.stringify(expectedFile));
  });
});

describe('deletePaths', () => {
  it('should delete the html docs paths file', () => {
    deletePaths();

    expect(fs.unlinkSync).toHaveBeenCalledWith('build/react-dom/paths.json');
  });
});
