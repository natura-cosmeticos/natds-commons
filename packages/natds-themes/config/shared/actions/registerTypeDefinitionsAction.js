/* eslint-disable max-statements */
import fs, { existsSync } from 'fs';
import path from 'path';
import JsonToTS from 'json-to-ts';
import { compileTemplate, splitTokensAndComponents } from '../helpers';
import { brands } from '../constants';

const buildDefinitionPath = (config) => {
  const [buildFolder, platformFolder] = config.buildPath.split('/');

  return `${buildFolder}/${platformFolder}/index.d.ts`;
};

const fixTypeDefinitions = (types) => types
  .replace('RootObject', 'Theme')
  .replace(/;/gm, '')
  .replace(/interface/gm, '\n export interface');

const doAction = (_dictionary, config) => {
  const definitionsPath = buildDefinitionPath(config);

  if (existsSync(path.join(__dirname, '../../', definitionsPath))) return false;

  const jsonFile = config.files.find(({ destination }) => destination.includes('.json') && !destination.includes('spectrum'));
  const jsonThemeFile = fs.readFileSync(`${config.buildPath}${jsonFile.destination}`);
  const templatePath = path.resolve(__dirname, '../templates/typeDefinitions.hbs');
  const typesTemplate = compileTemplate(templatePath);

  const { tokens, components } = splitTokensAndComponents(JSON.parse(jsonThemeFile));

  const theme = { ...tokens, ...components };

  const typeDefinitions = JsonToTS(theme)
    .reduce((types, typeInterface) => types.concat(typeInterface), '');

  const tokensTypes = fixTypeDefinitions(typeDefinitions);

  const types = typesTemplate({
    brands,
    tokensTypes,
  });

  return fs.writeFileSync(definitionsPath, types);
};

const undoAction = (dictionary, config) => {
  const definitionsPath = buildDefinitionPath(config);

  return fs.unlinkSync(definitionsPath);
};

export const registerTypeDefinitionsAction = () => ({
  do: doAction,
  name: 'create_type_definitions',
  undo: undoAction,
});

export default registerTypeDefinitionsAction;
