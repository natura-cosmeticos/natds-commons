import { Radio } from '../src/Radio';

describe('Radio', () => {
  it('should render checked radio group', () => {
    const radio = Radio('pokemon', 'pikachu', true);

    expect(radio).toMatchSnapshot();
  });

  it('should render unchecked radio group', () => {
    const radio = Radio('pokemon', 'pikachu', false);

    expect(radio).toMatchSnapshot();
  });
});
