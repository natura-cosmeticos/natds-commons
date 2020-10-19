import path from 'path';
import { init, buildConfig } from '.';
import * as writeFiles from './actions/writeFiles';
import * as buildInitialFontData from './actions/buildInitialFontData/buildInitialFontData';
import * as buildPreviousIconCodes from './actions/buildPreviousIconCodes';
import * as buildJson from './actions/buildJson';
import * as buildJsonDts from './actions/buildJsonDts';
import * as buildSvgPaths from './actions/buildSvgPaths';
import * as buildFonts from './actions/buildFonts';
import * as buildCurrentIconCodes from './actions/buildCurrentIconCodes';
import * as buildCss from './actions/buildCss';
import * as buildCssDts from './actions/buildCssDts';
import * as buildSwift from './actions/buildSwift/buildSwift';
import * as optimizeSvg from './actions/optimizeSvg/optimizeSvg';

jest.mock('path');

const expectedConfig = {
  cleanedSvgOutput: '../dist/svg',
  fontExtensions: ['eot', 'ttf', 'woff', 'woff2', 'svg'],
  fontName: 'natds-icons',
  iconCodesPath: './generated/natds-icons-codes.json',
  outputPath: '../dist',
  rawSvgInput: './svg/**/*.svg',
};

const originalLog = console.log;

describe('natds icons build pipeline', () => {
  afterEach(() => {
    console.log = originalLog;
  });

  it('should run the build actions', () => {
    const buildPreviousIconCodesSpy = jest.spyOn(buildPreviousIconCodes, 'buildPreviousIconCodes').mockImplementation(() => Promise.resolve());
    const buildInitialFontDataSpy = jest.spyOn(buildInitialFontData, 'buildInitialFontData').mockImplementation(() => Promise.resolve());
    const buildCurrentIconCodesSpy = jest.spyOn(buildCurrentIconCodes, 'buildCurrentIconCodes').mockImplementation(() => Promise.resolve());
    const buildJsonSpy = jest.spyOn(buildJson, 'buildJson').mockImplementation(() => Promise.resolve());
    const buildJsonDtsSpy = jest.spyOn(buildJsonDts, 'buildJsonDts').mockImplementation(() => Promise.resolve());
    const buildCssSpy = jest.spyOn(buildCss, 'buildCss').mockImplementation(() => Promise.resolve());
    const buildCssDtsSpy = jest.spyOn(buildCssDts, 'buildCssDts').mockImplementation(() => Promise.resolve());
    const buildFontsSpy = jest.spyOn(buildFonts, 'buildFonts').mockImplementation(() => Promise.resolve());
    const buildSwiftSpy = jest.spyOn(buildSwift, 'buildSwift').mockImplementation(() => Promise.resolve());
    const writeFilesSpy = jest.spyOn(writeFiles, 'writeFiles').mockImplementation(() => Promise.resolve());
    const optimizeSvgSpy = jest.spyOn(optimizeSvg, 'optimizeSvg').mockImplementation(() => Promise.resolve());
    const buildSvgPathsSpy = jest.spyOn(buildSvgPaths, 'buildSvgPaths').mockImplementation(() => Promise.resolve());

    path.resolve.mockImplementation((currentDir, newPath) => newPath);

    return init().then(() => {
      expect(buildSvgPathsSpy).toHaveBeenCalledWith({ globalConfig: expectedConfig });
      expect(optimizeSvgSpy).toHaveBeenCalled();
      expect(buildPreviousIconCodesSpy).toHaveBeenCalled();
      expect(buildInitialFontDataSpy).toHaveBeenCalled();
      expect(buildCurrentIconCodesSpy).toHaveBeenCalled();
      expect(buildJsonSpy).toHaveBeenCalled();
      expect(buildJsonDtsSpy).toHaveBeenCalled();
      expect(buildCssSpy).toHaveBeenCalled();
      expect(buildCssDtsSpy).toHaveBeenCalled();
      expect(buildFontsSpy).toHaveBeenCalled();
      expect(buildSwiftSpy).toHaveBeenCalled();
      expect(writeFilesSpy).toHaveBeenCalled();
    });
  });

  it('should log if there is an error', () => {
    jest
      .spyOn(buildSvgPaths, 'buildSvgPaths')
      .mockImplementation(() => Promise.reject(new Error('error message')));

    const logMock = jest.fn();

    console.log = logMock;

    return init().catch(() => {
      expect(logMock).toHaveBeenCalledWith('error message');
    });
  });

  describe('buildConfig', () => {
    it('should build config', () => {
      path.resolve.mockImplementation((currentDir, newPath) => newPath);

      expect(buildConfig()).toEqual(expectedConfig);
    });
  });
});
