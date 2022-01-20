import { Table } from './Table'
import { Form } from './Form'
import { createElement } from './helpers'
import jss from './styles/jss'

const containerStyles = {
  container: {
    padding: 20
  }
}

const sheet = jss.createStyleSheet(containerStyles)

export const App = () => {
  sheet.attach()
  const wrapper = createElement('div', null, null, sheet.classes.container)

  wrapper.appendChild(Form())
  wrapper.appendChild(Table())

  return wrapper
}

export default App
