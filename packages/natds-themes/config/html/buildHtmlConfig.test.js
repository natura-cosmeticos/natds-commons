import buildHtmlConfig from './buildHtmlConfig';

const expectedConfig = {
  actions: ['create_paths_html', 'custom_copy_assets'],
  buildPath: 'build/html/pokemon/',
  files: [
    {
      destination: 'pikachu.html',
      filter: 'privateProperties',
      format: 'html/colors',
    },
  ],
  transformGroup: 'html',
  transforms: ['name/cti/camel-custom', 'asset/extension'],
};

describe('buildHtmlConfig', () => {
  it('should return the html config for the given brand and mode', () => {
    const config = buildHtmlConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
