import buildHtmlConfig from './buildHtmlConfig';

const expectedConfig = {
  actions: ['create_paths_html', 'custom_copy_assets', 'create_type_face'],
  brand: 'pokemon',
  buildPath: 'build/html/pokemon/',
  files: [
    {
      destination: 'pikachu.html',
      filter: 'privateProperties',
      format: 'html/colors',
    },
    {
      destination: 'spectrum-pikachu.html',
      filter: 'spectrumProperties',
      format: 'html/spectrum',
    },
  ],
  transformGroup: 'html',
  transforms: [
    'name/cti/camel-custom',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
    'unit/px',
    'fontFamily/string',
  ],
};

describe('buildHtmlConfig', () => {
  it('should return the html config for the given brand and mode', () => {
    const config = buildHtmlConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
