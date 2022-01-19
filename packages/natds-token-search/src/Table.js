import {
  pipe, join, mapObjIndexed, values
} from 'ramda'
import { createElement } from './helpers'
import { store } from './store'
import jss from './styles/jss'
import { color } from './styles/global'

const tableStyles = {
  tokenTable: {
    '& .deprecated': {
      backgroundColor: 'red',
      borderRadius: 8,
      color: 'white',
      fontSize: 12,
      padding: [0, 8]
    },
    '& .opacity': {
      backgroundColor: '#D51BE5',
      display: 'inline-block',
      height: '100%',
      width: '50%'

    },
    '& .opacity-wrapper': {
      backgroundColor: '#eaeaea',
      textAlign: 'center'
    },
    '& .preview': {
      border: '1px solid #eaeaea',
      height: 24,
      width: '100%'
    },
    '& td, & th': {
      border: [1, 'solid', color.gray],
      fontSize: 16,
      lineHeight: 1.5,
      padding: 8
    },
    '& tr': {
      textAlign: 'left'
    },
    borderCollapse: 'collapse',
    borderSpacing: 0,
    marginTop: 50,
    tableLayout: 'fixed',
    width: '100%'
  }
}

const tableSheet = jss.createStyleSheet(tableStyles)

const tableHeading = '<thead><th>Name</th><th>Value</th><th>Preview</th></thead>'

const buildNamePreview = (name) => {
  const { deprecatedTokens } = store.getState()

  if (Object.keys(deprecatedTokens).includes(name)) {
    return `<td>${name} <span class="deprecated">deprecated</span></td>`
  }

  return `<td>${name}</td>`
}

const buildPreview = (name, value) => {
  if (name.includes('color')) {
    return `<div class="preview color" style="background-color: ${value.replace(/"/g, '')}"></div>`
  }

  if (name.includes('opacity')) {
    return `<div class="preview opacity-wrapper"><span class="opacity" style="opacity: ${value}"></span></div>`
  }

  return ''
}

const renderBody = pipe(
  mapObjIndexed((value, name) => `<tr>${buildNamePreview(name)}<td>${value}</td><td>${buildPreview(name, value)}</td></tr>`),
  values,
  join('')
)

export const Table = () => {
  tableSheet.attach()
  const table = createElement('table', null, tableHeading, tableSheet.classes.tokenTable)
  const tableBody = createElement('tbody')

  store.subscribe(() => {
    tableBody.innerHTML = renderBody(store.getState().selectedTokens)
  })
  tableBody.innerHTML = renderBody(store.getState().selectedTokens)
  table.appendChild(tableBody)

  return table
}

export default Table
