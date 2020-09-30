import { RadioGroup } from '../src/RadioGroup';
import * as Radio from '../src/Radio';
import { createMockElement } from './testHelpers';

const createMockRadio = (name, value) => createMockElement('input', {
  'data-testid': value,
  name,
  type: 'radio',
  value,
});

describe('RadioGroup', () => {
  beforeEach(() => {
    jest.spyOn(Radio, 'Radio').mockImplementation(createMockRadio);
  });

  it('should render radio group', () => {
    const radioGroup = RadioGroup('pokemon', ['pikachu', 'bulbasour'], 'pikachu', 'Pokemons');

    expect(radioGroup).toMatchSnapshot();
  });
});
