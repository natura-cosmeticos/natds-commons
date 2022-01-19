import { isOneOfProps, isAssetFile, isProp } from '../../shared/helpers'

const isStringTypeProp = (prop) => isOneOfProps(['fontFamily', 'fontWeight'])(prop)

const rules = [
  { rule: isStringTypeProp, type: 'string' },
  { rule: isAssetFile, type: 'reference' },
  { rule: isProp('color'), type: 'color' },
  { rule: isProp('opacity'), type: 'float' },
  { rule: isProp('spectrum'), type: 'color' }
]

export const getType = (prop) => {
  const match = rules.find((rule) => rule.rule(prop))

  return match ? match.type : 'dimension'
}

export const registerAttributeTypeTransform = () => ({
  name: 'size/attrType',
  transformer: (prop) => ({
    customOptions: {
      type: getType(prop)
    }
  }),
  transitive: true,
  type: 'attribute'
})

export default registerAttributeTypeTransform
