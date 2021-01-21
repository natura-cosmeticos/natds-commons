import * as helpers from './helpers';
import { registerPrivatePropertiesFilter } from './registerPrivatePropertiesFilter';

const styleProperties = {
  attributes: {},
  filePath: 'properties/platforms/html/typography.js',
  isSource: true,
  name: 'platformOverlineLetterSpacing',
  original: { value: 1.92 },
  path: ['platform', 'overline', 'letterSpacing'],
  value: 1.92,
};

describe('registerPrivatePropertiesFilter', () => {
  it('should filter platform private properties', () => {
    const mockIsPrivateProp = jest.spyOn(helpers, 'isPrivateProp').mockReturnValue(true);
    const config = registerPrivatePropertiesFilter();

    const isAllowedProp = config.matcher(styleProperties);

    expect(mockIsPrivateProp).toHaveBeenCalledWith(styleProperties);
    expect(isAllowedProp).toBe(false);
  });
});
