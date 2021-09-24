import { registerAlphaTransform } from './registerAlphaTransform';
import * as helpers from '../helpers/helpers';

const prop = {
  attributes: { category: 'token' },
  name: 'buttonColor',
  original: {
    value: '#FFFFFF00',
  },
  path: ['color'],
  value: '#FFFFFF00',
};

describe('registerAlphaTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'color/android-alpha',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(registerAlphaTransform()).toMatchObject(expectedConfig);
  });

  it('should transform the color if it has alpha', () => {
    jest.spyOn(helpers, 'isColor').mockReturnValue(true);

    const config = registerAlphaTransform();

    expect(config.transformer(prop)).toEqual('#00FFFFFF');
  });
  it('should return the color if it does not have alpha', () => {
    jest.spyOn(helpers, 'isColor').mockReturnValue(true);

    const config = registerAlphaTransform();

    const propWithoutAlpha = {
      ...prop,
      original: {
        value: '#FFFFFF',
      },
      value: '#FFFFFF',
    };

    expect(config.transformer(propWithoutAlpha)).toEqual('#FFFFFF');
  });
});
