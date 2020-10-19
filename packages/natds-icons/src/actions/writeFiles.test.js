import fs from 'fs';
import path from 'path';
import { writeFiles } from './writeFiles';

jest.mock('fs');
jest.mock('path');

const content = JSON.stringify({ someKey: 'some value' });

const data = {
  outputs: {
    json: {
      content,
      outputPath: './folder/name/file.json',
    },
  },
};

describe('writeFiles', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should throw if there is no outputs', () => {
    try {
      writeFiles();
    } catch (err) {
      expect(err.message).toEqual('');
    }
  });

  it('should create the output directory if it does not exits', () => {
    path.resolve.mockImplementation((dir, outputPath) => outputPath);
    path.dirname.mockReturnValue('folder/name');
    fs.existsSync.mockReturnValue(false);

    writeFiles(data);

    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.mkdirSync).toHaveBeenCalledWith('folder/name', { recursive: true });
  });

  it('should not crete the output directory if already exists', () => {
    path.resolve.mockImplementation((dir, outputPath) => outputPath);
    path.dirname.mockReturnValue('folder/name');
    fs.existsSync.mockReturnValue(true);

    writeFiles(data);

    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.mkdirSync).not.toHaveBeenCalled();
  });

  it('should write the given outputs', () => {
    path.resolve.mockImplementation((dir, outputPath) => outputPath);

    writeFiles(data);

    expect(fs.writeFileSync).toHaveBeenCalledWith('./folder/name/file.json', content);
  });
});
