import fs, { existsSync } from 'fs';
import path from 'path';
import json2ts from 'json2ts';
import { compileTemplate } from '../helpers';
import { brands } from '../constants';

const buildDefinitionPath = (config) => {
  const [buildFolder, platformFolder] = config.buildPath.split('/');

  return `${buildFolder}/${platformFolder}/index.d.ts`;
};

const fixTypeDefinitions = (types) => types
  .replace('RootObject', 'Theme')
  .replace(/;/gm, '')
  .replace(/(BorderRadiu)(\s|\n)/gm, '$1s$2');

const doAction = (_dictionary, config) => {
  const definitionsPath = buildDefinitionPath(config);

  if (existsSync(path.join(__dirname, '../../', definitionsPath))) return false;

  const jsonFile = config.files.find(({ destination }) => destination.includes('.json') && !destination.includes('spectrum'));
  const jsonThemeFile = fs.readFileSync(`${config.buildPath}${jsonFile.destination}`);
  const typeDefinitions = json2ts.convert(jsonThemeFile);
  const templatePath = path.resolve(__dirname, '../templates/typeDefinitions.hbs');
  const typesTemplate = compileTemplate(templatePath);

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
