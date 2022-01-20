import { createElement } from './helpers'
import jss from './styles/jss'
import { color } from './styles/global'
import { Radio } from './Radio'

const radioGroupStyles = {
  radioGroup: {
    '&.brand,&.mode': {
      '& input:checked+label': {
        borderColor: color.primary,
        color: 'black',
        fontWeight: 'bold'
      },
      '& label': {
        '&:hover': {
          backgroundColor: color.primaryHover,
          borderColor: color.primary
        },
        border: [1, 'solid', color.gray],
        borderRadius: 25,
        color: color.text,
        padding: [8, 24]
      }
    },
    '&.platform': {
      '& $radios': {
        '&::after': {
          borderBottom: [1, 'solid', color.gray],
          bottom: 0,
          content: '""',
          left: 16,
          position: 'absolute',
          right: 0
        },
        marginLeft: -20,
        position: 'relative'
      },
      '& h5': {
        display: 'none'
      },
      '& input': {
        '&:checked+label': {
          fontWeight: 'bold'
        },
        '&:checked+label::after': {
          borderBottom: [2, 'solid', color.primary],
          bottom: 0,
          content: '""',
          left: 0,
          position: 'absolute',
          right: 0
        }
      },
      '& label': {
        padding: [20, 0]
      },
      '& span': {
        display: 'flex',
        margin: [0, 16],
        padding: 0,
        width: 'auto'
      }
    },
    margin: [20, 0]
  },
  radios: {
    '& span': {
      '& *': {
        verticalAlign: 'middle'
      },
      '& input': {
        margin: 0,
        opacity: 0,
        position: 'absolute'
      },
      '& label': {
        fontSize: 14,
        position: 'relative'
      },
      marginRight: 24,
      padding: [8, 0]
    },
    display: 'flex'
  }

}

const radioGroupSheet = jss.createStyleSheet(radioGroupStyles)

export const RadioGroup = (name, data, selected, titleText) => {
  radioGroupSheet.attach()
  const wrapper = createElement('div', null, null, radioGroupSheet.classes.radioGroup)
  const title = createElement('h5', null, titleText)

  wrapper.classList.add(name)
  wrapper.appendChild(title)

  const radios = createElement('div', null, null, radioGroupSheet.classes.radios)

  data.forEach((item) => {
    radios.appendChild(Radio(name, item, selected === item))
  })

  wrapper.appendChild(radios)

  return wrapper
}

export default RadioGroup
