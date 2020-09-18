import { fireEvent } from '@testing-library/dom';
import { Search } from '../src/Search';

describe('Search', () => {
  it('should render search', () => {
    const search = Search(jest.fn())

    expect(search).toMatchSnapshot();
  });
  
  it('should call onInput on input', () => {
    const onInput = jest.fn()
    const search = Search(onInput)
    fireEvent.input(search)  

    expect(onInput).toHaveBeenCalled();
  });
});
