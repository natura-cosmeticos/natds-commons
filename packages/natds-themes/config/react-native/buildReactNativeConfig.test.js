import buildReactNativeConfig from './buildReactNativeConfig';

const expectedConfig = {
  actions: ['create_type_definitions'],
  buildPath: 'build/react-native/pokemon/',
  files: [
    {
      destination: 'pikachu.json',
      format: 'json/nested',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'name/cti/camel-custom'],
};

describe('buildReactNativeConfig', () => {
  it('should return the react native config for the given brand and mode', () => {
    const config = buildReactNativeConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
