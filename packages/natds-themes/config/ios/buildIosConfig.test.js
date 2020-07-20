/* eslint-disable max-lines */

import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'ThemePokemonPikachu.swift',
      format: 'ios-swift/theme.swift',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti', 'name/cti/camel', 'attribute/type', 'value/string-literal'],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toMatchObject(expectedConfig);
  });
});
