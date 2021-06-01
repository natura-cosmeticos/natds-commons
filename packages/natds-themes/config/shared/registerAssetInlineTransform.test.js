/* eslint-disable mocha/max-top-level-suites */
import fs from 'fs';
import { registerAssetInlineTransform } from './registerAssetInlineTransform';

jest.mock('fs');
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
  });
  it('should return the svg content as string', () => {
    const config = registerAssetInlineTransform();
    const token = { original: { value: 'natura-a-official' } };

    const result = config.transformer(token);

    const expectedResult = '<svg>natura-a-official</svg>';

    expect(result).toEqual(expectedResult);
  });
});
