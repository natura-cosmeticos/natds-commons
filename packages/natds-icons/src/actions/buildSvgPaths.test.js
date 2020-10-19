import glob from 'glob';
import { buildSvgPaths } from './buildSvgPaths';

jest.mock('glob');

const globalConfig = {
  rawSvgInput: 'path/to/a/svg/folder',
};

describe('buildSvgPaths', () => {
  beforeEach(() => {
    glob.mockImplementation((path, cb) => cb(false, ['path/to/a/svg/file.svg']));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call glob with the input svg folder', () => buildSvgPaths({ globalConfig })
    .then((result) => expect(result).toEqual({
      globalConfig,
      svgPaths: {
        raw: ['path/to/a/svg/file.svg'],
      },
    })));

  it('should return the sgv path list', () => buildSvgPaths({ globalConfig })
    .then(() => expect(glob).toHaveBeenCalledWith('path/to/a/svg/folder', expect.any(Function))));

  it('should throw if svgFolder is not provided', () => {
    expect(buildSvgPaths()).rejects.toEqual(new Error('rawSvgInput was not provided'));
  });

  it('should throw if glob returns an error', () => {
    glob.mockImplementation((path, cb) => cb(new Error('Glob error'), []));
    expect(buildSvgPaths({ globalConfig })).rejects.toEqual(new Error('Glob error'));
  });
});
