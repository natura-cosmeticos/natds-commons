import { createElement } from './helpers'

export const Radio = (name, value, checked) => {
  const label = createElement('label', { for: value }, value)

  const input = createElement('input', {
    id: value,
    name,
    type: 'radio',
    value,
    ...(checked ? { checked: 'checked' } : {})
  })

  const wrapper = createElement('span')

  wrapper.appendChild(input)
  wrapper.appendChild(label)

  return wrapper
}

export default Radio
