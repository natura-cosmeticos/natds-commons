import { fireEvent, getByTestId } from '@testing-library/dom';
import { Search } from '../src/Search';
import * as helpers from '../src/helpers';
import { createMockElement } from './testHelpers';

describe('Search', () => {
  it('should render search', () => {
    const search = Search(jest.fn());

    expect(search).toMatchSnapshot();
  });

  it('should call onInput on input', () => {
    const createElementMock = (el, attrs = {}) => {
      const type = (attrs && attrs.type) || '';

      return createMockElement(el, {
        'data-testid': type,
        type,
      });
    };

    jest
      .spyOn(helpers, 'createElement')
      .mockImplementation(createElementMock);

    const onInput = jest.fn();
    const search = Search(onInput);

    fireEvent.input(getByTestId(search, 'search'));

    expect(onInput).toHaveBeenCalled();
  });
});
