import path from 'path';
import fs from 'fs';
import { convertFilToCss } from './convertFillToStyle';

jest.mock('fs');
jest.mock('path');

describe('convertFillToStyle', () => {
  it('should change characters with brackets', () => {
    const mockTheme = `{
      asset: <svg>
      <style>
        path,rect @@@
          fill: #000000
        !!!
      </style><path ></path><rect ></rect></svg>
    }`;

    fs.readFileSync.mockReturnValue(mockTheme);
    path.resolve.mockReturnValue('a/path');

    const expectedTheme = `{
      asset: <svg>
      <style>
        path,rect {
          fill: #000000
        }
      </style><path ></path><rect ></rect></svg>
    }`;

    convertFilToCss();

    expect(fs.writeFileSync).toHaveBeenCalledWith('a/path/light.json', expectedTheme);
  });
});
