import { registerTokenSearchPropertiesFilter } from './registerTokenSearchPropertiesFilter';

const styleProperties = {
  attributes: { category: 'color' },
  filePath: 'properties/platforms/html/color.js',
  isSource: true,
  name: 'colorPrimary',
  original: { value: '#666666' },
  path: ['color', 'primary'],
  value: '#666666',
};

describe('registerTokenSearchPropertiesFilter', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the filter config', () => {
    const config = registerTokenSearchPropertiesFilter();

    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'tokenSearchProperties',
    };

    expect(config).toMatchObject(expectedConfig);
  });

  it('should match token properties', () => {
    const config = registerTokenSearchPropertiesFilter();

    const isToken = config.matcher(styleProperties);

    expect(isToken).toBe(true);
  });

  it('should not match non token properties', () => {
    const config = registerTokenSearchPropertiesFilter();

    const componentProperty = {
      ...styleProperties,
      attributes: { category: 'button' },
    };

    const isToken = config.matcher(componentProperty);

    expect(isToken).toBe(false);
  });
});
