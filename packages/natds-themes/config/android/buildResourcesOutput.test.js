import fs from 'fs';
import path from 'path';
import * as sharedHelpers from '../shared/helpers';
import * as helpers from './helpers/helpers';
import { buildResourcesOutput, buildResourcesFromThemeValues } from './buildResourcesOutput';

jest.mock('fs');
jest.mock('../shared/helpers');

describe('buildResourcesOutput', () => {
  beforeEach(() => {
    fs.readFileSync.mockReturnValue(JSON.stringify(['#ffffff']));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should register the template header', () => {
    jest
      .spyOn(sharedHelpers, 'compileTemplate')
      .mockImplementation(() => jest.fn());

    const registerTemplateHeaderHelperSpy = jest
      .spyOn(sharedHelpers, 'registerTemplateHeaderHelper');

    buildResourcesOutput();

    expect(registerTemplateHeaderHelperSpy).toHaveBeenCalled();
  });

  it('should build resource files for android', () => {
    const templateSpy = jest.fn().mockReturnValue('A template');
    const compileTemplateSpy = jest
      .spyOn(sharedHelpers, 'compileTemplate')
      .mockImplementation(() => templateSpy);

    const createEncodedHashFromValueSpy = jest
      .spyOn(helpers, 'createEncodedHashFromValue')
      .mockReturnValue('encodedValue');

    buildResourcesFromThemeValues('colors');

    const expectedDataPath = path.resolve(__dirname, '../../build/android/theme/colors.json');
    const expectedTemplatePath = path.resolve(__dirname, 'formats/templates/colors.hbs');
    const expectedResourcePath = path.resolve(__dirname, '../../build/android/theme/colors.xml');

    expect(fs.readFileSync).toHaveBeenCalledWith(expectedDataPath);
    expect(compileTemplateSpy).toHaveBeenCalledWith(expectedTemplatePath);
    expect(createEncodedHashFromValueSpy).toHaveBeenCalledWith('#ffffff');
    expect(templateSpy).toHaveBeenCalledWith({ colors: [{ encodedValue: '#ffffff' }] });
    expect(fs.writeFileSync).toHaveBeenCalledWith(expectedResourcePath, 'A template');
  });
});
