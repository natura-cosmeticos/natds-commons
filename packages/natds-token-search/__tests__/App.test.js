import { getByText } from '@testing-library/dom';
import * as Form from '../src/Form';
import * as Table from '../src/Table';
import * as helpers from '../src/helpers';
import { App } from '../src/App';
import { createMockElement } from '../testHelpers';

describe('App', () => {
  let createElementSpy;

  beforeEach(() => {
    jest.spyOn(Form, 'Form').mockReturnValue(createMockElement('div', null, 'Form'));
    jest.spyOn(Table, 'Table').mockReturnValue(createMockElement('div', null, 'Table'));
    createElementSpy = jest.spyOn(helpers, 'createElement');
  });

  it('calls createElement', () => {
    App();
    expect(createElementSpy).toHaveBeenCalled();
  });

  it('renders the app', () => expect(App()).toMatchSnapshot());

  it('renders the app form', () => expect(getByText(App(), 'Form')).toBeTruthy());

  it('renders the app table', () => expect(getByText(App(), 'Table')).toBeTruthy());
});
