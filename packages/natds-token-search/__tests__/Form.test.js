import { getByText, queryByTestId, getByTestId, fireEvent } from '@testing-library/dom';
import { Form } from '../src/Form';
import * as Search from '../src/Search';
import * as RadioGroup from '../src/RadioGroup';
import * as helpers from '../src/helpers';
import { store } from '../src/store';
import * as actions from '../src/store/actions';
import { createMockElement } from './testHelpers';

const createMockInput = (type, name) => createMockElement('input', {
  type,
  name,
  'data-testid': name,
});


const state = {
  allTokens: 'allTokens',
  brand: 'natura',
  mode: 'light',
  platform: 'web',
  search: null,
  selectedTokens: 'selectedTokens',
};

describe('Form', () => {
  let createElementSpy;
  let radioGroupSpy;

  beforeEach(() => {
    jest.spyOn(Search, 'Search').mockReturnValue(createMockInput('search', 'search'));
    jest.spyOn(store, 'getState').mockReturnValue(state);
    radioGroupSpy = jest.spyOn(RadioGroup, 'RadioGroup').mockImplementation((name) => createMockInput('radio', name));
    createElementSpy = jest.spyOn(helpers, 'createElement');
  });

  it('calls createElement', () => {
    Form();

    expect(createElementSpy).toHaveBeenCalled();
  });

  it('should render the form', () => expect(Form()).toMatchSnapshot());

  it('should call search action on form change', () => {
    const searchActionSpy = jest.spyOn(actions, 'searchAction');

    const form = Form();
    fireEvent.change(getByTestId(form, 'platform'), { target: { value: 'android', name: 'platform' } })

    expect(searchActionSpy).toHaveBeenCalledWith({ platform: 'android' })
  });

  describe('radio group', () => {
    it('should render the form platform radio group', () => {
      const form = Form();

      expect(queryByTestId(form, 'platform')).toBeTruthy()
      expect(radioGroupSpy.mock.calls[0]).toEqual(['platform', ['android', 'ios', 'reactNative', 'web'], 'web', 'Platforms'])
    });

    it('should render the form brand radio group', () => {
      const form = Form();

      expect(queryByTestId(form, 'brand')).toBeTruthy()
      expect(radioGroupSpy.mock.calls[1]).toEqual(['brand', ['aesop', 'avon', 'natura', 'theBodyShop'], 'natura', 'Brands'])
    });

    it('should render the form mode radio group', () => {
      const form = Form();

      expect(queryByTestId(form, 'mode')).toBeTruthy()
      expect(radioGroupSpy.mock.calls[2]).toEqual(['mode', ['light', 'dark'], 'light', 'Modes'])
    });
  });

  describe('search', () => {
    it('should render the form search', () => expect(queryByTestId(Form(), 'search')).toBeTruthy());

    it('should call search action on search input', () => {
      const searchActionSpy = jest.spyOn(actions, 'searchAction');

      const form = Form();

      fireEvent.change(getByTestId(form, 'search'), { target: { value: 'pikachu' } })

      expect(searchActionSpy).toHaveBeenCalledWith({ search: 'pikachu' })
    });
  });
});
