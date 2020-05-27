import buildAndroidConfig from './buildAndroidConfig';

const expectedConfig = {
  buildPath: 'build/android/pokemon/',
  files: [
    {
      destination: 'theme_attributes.xml',
      format: 'android/attributes',
    },
    {
      destination: 'Theme.Pokemon.Pikachu.xml',
      format: 'android/themes',
    },
  ],
  transformGroup: 'android',
  transforms: ['name/cti/camel'],
};

describe('buildAndroidConfig', () => {
  it('should return the android config for the given brand and mode', () => {
    const config = buildAndroidConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
