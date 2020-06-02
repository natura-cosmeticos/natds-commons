import fs from 'fs';
import registerCreatePathsAction, { createPaths, deletePaths, dataBuilderFunction } from './registerCreatePathsAction';
import * as createOutputPathInfo from '../shared/createOutputPathInfo';
import * as textHelpers from '../shared/textHelpers';

jest.mock('fs');

const sampleConfig = {
  buildPath: 'build/react-dom/brand/',
  files: [{ destination: 'mode.html' }],
};

describe('registerCreatePathsAction', () => {
  it('should return create paths action', () => {
    const createPathsAction = registerCreatePathsAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_paths_react_dom');
  });
});

describe('createPaths', () => {
  it('should call createOutputPathInfo function', () => {
    jest.spyOn(createOutputPathInfo, 'createOutputPathInfo');

    createPaths(null, sampleConfig);

    expect(createOutputPathInfo.createOutputPathInfo).toHaveBeenCalled();
  });
});

describe('deletePaths', () => {
  it('should delete the html docs paths file', () => {
    deletePaths();

    expect(fs.unlinkSync).toHaveBeenCalledWith('build/react-dom/paths.json');
  });
});

describe('dataBuilderFunction', () => {
  it('should build the template data', () => {
    const capitalizeWordSpy = jest.fn(() => 'Mode');

    jest
      .spyOn(textHelpers, 'capitalizeWord')
      .mockImplementation(capitalizeWordSpy);

    const data = dataBuilderFunction(null, sampleConfig);

    expect(data).toEqual({
      name: 'brandModeColorTokens',
      path: '/brand/mode.html',
    });

    expect(capitalizeWordSpy).toHaveBeenCalledWith('mode');
  });
});
