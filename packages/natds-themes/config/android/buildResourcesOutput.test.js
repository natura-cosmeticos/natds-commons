import fs from 'fs';
import path from 'path';
import * as templateHelpers from '../shared/templateHelpers';
import * as helpers from './helpers';
import { buildResourcesOutput, buildResourcesFromThemeValues } from './buildResourcesOutput';

jest.mock('fs');

describe('buildResourcesOutput', () => {
  beforeEach(() => {
    fs.readFileSync.mockReturnValue(JSON.stringify(['#ffffff']));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should register the template header', () => {
    const registerTemplateHeaderHelperSpy = jest
      .spyOn(templateHelpers, 'registerTemplateHeaderHelper');

    buildResourcesOutput();

    expect(registerTemplateHeaderHelperSpy).toHaveBeenCalled();
  });

  it('should build resource files for android', () => {
    const templateSpy = jest.fn().mockReturnValue('A template');
    const compileTemplateSpy = jest.spyOn(templateHelpers, 'compileTemplate').mockReturnValue(templateSpy);
    const createEncodedHashFromValueSpy = jest.spyOn(helpers, 'createEncodedHashFromValue').mockReturnValue('encodedValue');

    buildResourcesFromThemeValues('colors');

    const expectedDataPath = path.resolve(__dirname, '../../build/android/colors.json');
    const expectedTemplatePath = path.resolve(__dirname, './templates/colors.hbs');
    const expectedResourcePath = path.resolve(__dirname, '../../build/android/colors.xml');

    expect(fs.readFileSync).toHaveBeenCalledWith(expectedDataPath);
    expect(compileTemplateSpy).toHaveBeenCalledWith(expectedTemplatePath);
    expect(createEncodedHashFromValueSpy).toHaveBeenCalledWith('#ffffff');
    expect(templateSpy).toHaveBeenCalledWith({ colors: [{ encodedValue: '#ffffff' }] });
    expect(fs.writeFileSync).toHaveBeenCalledWith(expectedResourcePath, 'A template');
  });
});
