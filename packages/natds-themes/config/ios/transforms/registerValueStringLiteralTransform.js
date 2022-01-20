import { isProp } from '../../shared/helpers'

export const registerValueStringLiteralTransform = () => ({
  name: 'value/string-literal',
  transformer: (prop) => (
    typeof prop.value === 'string' && !isProp('fontWeight')(prop)
      ? `"${prop.value}"`
      : prop.value
  ),
  type: 'value'
})

export default registerValueStringLiteralTransform
