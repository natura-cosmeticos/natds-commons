import { isSpectrumProp } from '../helpers'

export const registerSpectrumPropertiesFilter = () => ({
  matcher: isSpectrumProp,
  name: 'spectrumProperties'
})

export default registerSpectrumPropertiesFilter
