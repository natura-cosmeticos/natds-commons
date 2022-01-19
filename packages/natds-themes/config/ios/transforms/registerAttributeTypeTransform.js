import { flipIsProp, isProp } from '../../shared/helpers'

const types = {
  color: 'String',
  float: 'CGFloat',
  fontWeight: 'UIFont.Weight',
  int: 'CGFloat',
  lineHeight: 'CGFloat',
  number: 'CGFloat',
  shadowOpacity: 'Float',
  spectrum: 'String',
  string: 'String'
}

const transformer = (prop) => {
  const typeKey = Object
    .keys(types)
    .find(flipIsProp(prop))

  const type = types[typeKey || typeof prop.value]

  return {
    customOptions: {
      includeType: isProp('fontWeight')(prop) || (type !== 'String' && type !== 'UIColor'),
      type
    }
  }
}

export const registerAttributeTypeTransform = () => ({
  name: 'attribute/type',
  transformer,
  transitive: true,
  type: 'attribute'
})

export default registerAttributeTypeTransform
