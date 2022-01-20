import * as helpers from '../helpers'
import { registerSpectrumPropertiesFilter } from './registerSpectrumPropertiesFilter'

jest.mock('../helpers')

const styleProperties = {
  attributes: {},
  filePath: 'properties/platforms/html/typography.js',
  isSource: true,
  name: 'platformOverlineLetterSpacing',
  original: { value: 1.92 },
  path: ['platform', 'overline', 'letterSpacing'],
  value: 1.92
}

describe('registerSpectrumPropertiesFilter', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should filter spectrum properties', () => {
    const mockIsSpectrumProp = jest.spyOn(helpers, 'isSpectrumProp').mockReturnValue(true)
    const config = registerSpectrumPropertiesFilter()

    const isAllowedProp = config.matcher(styleProperties)

    expect(mockIsSpectrumProp).toHaveBeenCalledWith(styleProperties)
    expect(isAllowedProp).toBe(true)
  })
})
