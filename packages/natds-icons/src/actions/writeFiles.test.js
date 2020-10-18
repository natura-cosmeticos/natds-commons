import fs from 'fs';
import path from 'path';
import writeFiles from './writeFiles';

jest.mock('fs')
jest.mock('path')

const content = JSON.stringify({ someKey: 'some value' });

const data = {
  outputs: {
    json: {
      outputPath: 'file.json',
      content
    }
  }
}

describe('writeFiles', () => {
  it('should throw if there is no outputs', () => {
    try {
      writeFiles();
    } catch (err) {
      expect(err.message).toEqual('')
    }
  });

  it('should write the given outputs', () => {
    path.resolve.mockImplementation((dir, ouputPath) => `src/${ouputPath}`)

    writeFiles(data);

    expect(fs.writeFileSync).toHaveBeenCalledWith('src/file.json', content)
  });
});
