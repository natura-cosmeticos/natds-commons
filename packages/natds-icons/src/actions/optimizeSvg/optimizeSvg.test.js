import fs from 'fs';
import path from 'path';
import SVGO from 'svgo';
import { optimizeSvg } from './optimizeSvg';

jest.mock('fs');
jest.mock('svgo');

const data = {
  globalConfig: {
    cleanedSvgOutput: './cleaned',
    rawSvgInput: './raw',
  },
  svgPaths: { raw: ['a/svg/path.svg'] },
};

describe('optimizeSvg', () => {
  let svgoOptimizeSpy;

  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue('<svg>content</svg>');
    svgoOptimizeSpy = jest.fn();
    svgoOptimizeSpy.mockReturnValue({
      data: '<svg>content</svg>',
      path: 'a/svg/path.svg',
    });
    SVGO.mockImplementation(() => ({ optimize: svgoOptimizeSpy }));
  });

  it('should throw an error if there is no svgPaths', () => {
    expect(optimizeSvg()).rejects.toEqual(new Error('svgPaths not found'));
  });

  it('should create a svgo instance', () => optimizeSvg(data)
    .then(() => expect(SVGO).toHaveBeenCalled()));

  it('should read raw svg files from svgPaths', () => optimizeSvg(data)
    .then(() => expect(fs.readFileSync).toHaveBeenCalledWith('a/svg/path.svg')));

  it('should call optimize with svg contents', () => optimizeSvg(data)
    .then(() => expect(svgoOptimizeSpy)
      .toHaveBeenCalledWith('<svg>content</svg>', { path: 'a/svg/path.svg' })));

  it('should write the cleaned svg to disk', () => optimizeSvg(data)
    .then(() => expect(fs.writeFileSync)
      .toHaveBeenCalledWith(path.resolve('./cleaned/path.svg'), '<svg>content</svg>')));

  it('should create output directory if does not exists', () => {
    fs.existsSync.mockReturnValue(false);

    return optimizeSvg(data)
      .then(() => expect(fs.mkdirSync)
        .toHaveBeenCalledWith('./cleaned', { recursive: true }));
  });

  it('should the given data adding the cleaned svg paths', () => optimizeSvg(data)
    .then((result) => expect(result)
      .toEqual({
        ...data,
        svgPaths: {
          ...data.svgPaths,
          cleaned: [path.resolve('./cleaned/path.svg')],
        },
      })));
});
