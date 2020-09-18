import { createElement } from './helpers';
import jss from './styles/jss';
import { Radio } from './Radio';

const radioGroupStyles = {
  radios: {
    '& span': {
      '& *': {
        verticalAlign: 'middle',
      },
      '& input': {
        margin: 0,
      },
      '& label': {
        fontSize: 14,
        paddingLeft: 8,
      },
      padding: [8, 0],
      width: 120,
    },
    display: 'flex',
  },
  radioGroup: {
    '&.platform': {
      '& $radios': {
        '&::after': {
          borderBottom: [1, 'solid', '#dfdfdf'],
          bottom: 0,
          content: '""',
          left: 16,
          position: 'absolute',
          right: 0,
        },
        marginLeft: -20,
        position: 'relative',
      },
      '& h5': {
        display: 'none',
      },
      '& input': {
        '&:checked+label': {
          fontWeight: 'bold',
        },
        '&:checked+label::after': {
          borderBottom: [2, 'solid', '#227BBD'],
          bottom: 0,
          content: '""',
          left: 0,
          position: 'absolute',
          right: 0,
        },
        opacity: 0,
        position: 'absolute',
      },
      '& label': {
        padding: [20, 0],
        position: 'relative',
      },
      '& span': {
        display: 'flex',
        margin: [0, 16],
        padding: 0,
        width: 'auto',
      },
    },
    margin: [20, 0],
  },
};

const radioGroupSheet = jss.createStyleSheet(radioGroupStyles);

export const RadioGroup = (name, data, selected, titleText) => {
  radioGroupSheet.attach();
  const wrapper = createElement('div', null, null, radioGroupSheet.classes.radioGroup);
  const title = createElement('h5', null, titleText);

  wrapper.classList.add(name);
  wrapper.appendChild(title);

  const radios = createElement('div', null, null, radioGroupSheet.classes.radios);

  data.forEach((item) => {
    radios.appendChild(Radio(name, item, selected === item));
  });

  wrapper.appendChild(radios);

  return wrapper;
};

export default RadioGroup;
