import { createElement } from './helpers'

const brandsLabel = {
  avon: 'Avon',
  avon_v2: 'Avon v2',
  biome: 'Biome',
  natura: 'Natura',
  theBodyShop: 'The Body Shop',
  consultoriaDeBeleza: 'Consultoria de Beleza',
  forcaDeVendas: 'Força de Vendas',
  natura_v2: 'Natura v2',
  natura_v3: 'Natura v3',
  casaEestilo: 'Casa & estilo',
  casaEestilo_v2: 'Casa & estilo v2'
}
const platformsLabel = {
  android: 'Android',
  ios: 'IOS',
  reactNative: 'React Native',
  web: 'Web'
}
const LabelParse = (name, value) => {
  switch (name) {
    case 'brand':
      return brandsLabel[value]
    case 'platform':
      return platformsLabel[value]
    default:
      return value
  }
}

export const Radio = (name, value, checked) => {
  const label = createElement('label', { for: value }, LabelParse(name, value))

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
