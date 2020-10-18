import fs from 'fs';
import { buildPreviousIconCodes } from './buildPreviousIconCodes';

jest.mock('fs');

const data = {
  globalConfig: {
    iconCodesPath: './icon-codes.json',
  },
  svgPaths: {
    cleaned: [
      './an/icon/path/icon-name.svg',
      './an/icon/path/another-icon-name.svg',
    ],
  },
};

describe('buildPreviousIconCodes', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should throw if there is no iconCodesPath in config', () => {
    try {
      buildPreviousIconCodes();
    } catch (error) {
      expect(error.message).toEqual('iconCodesPath missing');
    }
  });

  describe('when a previous icon code file exists', () => {
    beforeEach(() => {
      const previousIconCodes = JSON.stringify({ 'icon-name': ['code'] });

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(previousIconCodes);
    });

    it('should read the previous icon codes file', () => {
      buildPreviousIconCodes(data);

      expect(fs.existsSync).toHaveBeenCalledWith('./icon-codes.json');
      expect(fs.readFileSync).toHaveBeenCalledWith('./icon-codes.json');
    });

    it('should return the given data adding the previousIconCodes', () => {
      const result = buildPreviousIconCodes(data);

      expect(result).toEqual({
        ...data,
        previousIconCodes: { 'icon-name': ['code'] },
      });
    });
  });

  it('should return an empty object if there is no previous file', () => {
    fs.existsSync.mockReturnValue(false);

    const result = buildPreviousIconCodes(data);

    expect(result).toEqual({
      ...data,
      previousIconCodes: {},
    });
  });
});
