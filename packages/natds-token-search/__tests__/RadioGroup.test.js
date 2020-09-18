import { RadioGroup } from '../src/RadioGroup';
import * as Radio from '../src/Radio';
import { createMockElement } from '../testHelpers';
import * as helpers from '../src/helpers';

const createMockRadio = (name, value, checked) => createMockElement('input', {
  type: 'radio',
  name,
  value,
  'data-testid': value,
})

describe('RadioGroup', () => {
  beforeEach(() => {
    jest.spyOn(Radio, 'Radio').mockImplementation(createMockRadio);
  });

  it('should render radio group', () => {
    const radioGroup = RadioGroup('pokemon', ['pikachu', 'bulbasour'], 'pikachu', 'Pokemons')

    expect(radioGroup).toMatchSnapshot();
  });
});
