import fs from 'fs';
import path from 'path';
import { compileTemplate, registerTemplateHeaderHelper } from '../shared/helpers';
import { createEncodedHashFromValue } from './shared/helpers';

const buildEncodedObjectFromValue = (value) => ({ [createEncodedHashFromValue(value)]: value });

const buildUniqueEncodedArray = (values) => {
  const uniqueValuesKeys = [...new Set(JSON.parse(values))];

  return uniqueValuesKeys.map(buildEncodedObjectFromValue);
};

export const buildResourcesFromThemeValues = (resourceType) => {
  const outputPath = path.resolve(__dirname, '../../build/android');
  const templatePath = path.resolve(__dirname, `./formats/templates/${resourceType}.hbs`);
  const themeValues = fs.readFileSync(`${outputPath}/${resourceType}.json`);

  const template = compileTemplate(templatePath);

  const colorsXml = template({ [resourceType]: buildUniqueEncodedArray(themeValues) });

  fs.writeFileSync(`${outputPath}/${resourceType}.xml`, colorsXml);
};

export const buildResourcesOutput = () => {
  registerTemplateHeaderHelper();
  buildResourcesFromThemeValues('colors');
  buildResourcesFromThemeValues('dimensions');
};
