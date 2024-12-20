import { createElement } from './helpers'
import { searchAction, store } from './store'
import { RadioGroup } from './RadioGroup'
import { Search } from './Search'

const brands = [
  // 'aesop',
  'avon',
  'avon_v2',
  'biome',
  'natura',
  'theBodyShop',
  'consultoriaDeBeleza',
  'consultoriaDeBeleza_v2',
  'forcaDeVendas',
  'forcaDeVendas_v2',
  'natura_v2',
  'natura_v3',
  'casaEestilo',
  'casaEestilo_v2'
]

const modes = ['light', 'dark']

const platforms = [
  'android',
  'ios',
  'reactNative',
  'web'
]

export const onInputSearch = ({ target }) => store.dispatch(
  searchAction({ search: target.value })
)

const onFormChange = (event) => store.dispatch(
  searchAction({ [event.target.name]: event.target.value })
)

export const onFormSubmit = (event) => event.preventDefault()

export const Form = () => {
  const form = createElement('form')

  const state = store.getState()

  form.appendChild(RadioGroup('platform', platforms, state.platform, 'Platforms'))
  form.appendChild(Search(onInputSearch))
  form.appendChild(RadioGroup('brand', brands, state.brand, 'Brands'))
  form.appendChild(RadioGroup('mode', modes, state.mode, 'Modes'))

  form.addEventListener('change', onFormChange)
  form.addEventListener('submit', onFormSubmit)

  return form
}

export default Form
