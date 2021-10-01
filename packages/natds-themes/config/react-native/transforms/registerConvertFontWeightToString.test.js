import { registerConvertFontWeightToString } from './registerConvertFontWeightToString';

describe('registerConvertFontWeightToString', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'value/font-weight-rn',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(registerConvertFontWeightToString()).toMatchObject(expectedConfig);
  });
  it('should convert font weight to string', () => {
    const config = registerConvertFontWeightToString();

    const result = config.transformer({
      path: ['fontWeight'],
      value: 400,
    });

    expect(result).toEqual('400');
  });
});
