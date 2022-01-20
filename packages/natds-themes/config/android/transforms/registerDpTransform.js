import { isDimensionWithUnit, isSpDimension } from '../helpers/helpers'

export const registerDpTransform = () => ({
  matcher: isDimensionWithUnit,
  name: 'size/dp-custom',
  transformer: (prop) => {
    if (typeof prop.value === 'string') {
      return prop.value
    }

    return `${prop.value}${isSpDimension(prop) ? 'sp' : 'dp'}`
  },
  transitive: true,
  type: 'value'
})

export default registerDpTransform
