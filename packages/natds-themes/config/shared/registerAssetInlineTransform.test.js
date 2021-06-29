/* eslint-disable mocha/max-top-level-suites */
import fs from 'fs';
import path from 'path';
import svgo from 'svgo';
import { registerAssetInlineTransform } from './registerAssetInlineTransform';

jest.mock('fs');
jest.mock('path');
jest.mock('svgo');

describe('registerAssetInlineTransform', () => {
  it('should return the transformer config', () => {
    const config = registerAssetInlineTransform();
    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'asset/svg-inline',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(config).toMatchObject(expectedConfig);
  });
});

describe('transformer', () => {
  beforeEach(() => {
    fs.readFileSync.mockReturnValue('<svg>natura-a-official</svg>');
    path.join.mockReturnValue('a/path');
  });

  it('should return the svg content as string', () => {
    svgo.optimize.mockReturnValue({});
    const config = registerAssetInlineTransform();
    const token = { original: { value: 'natura-a-official' } };

    const result = config.transformer(token);

    const expectedResult = '<svg>natura-a-official</svg>';

    expect(result).toEqual(expectedResult);
    expect(fs.readFileSync).toHaveBeenCalledWith('a/path');
  });
});
