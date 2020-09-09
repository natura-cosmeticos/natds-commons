import fs, { existsSync } from 'fs';
import path from 'path';
import json2ts from 'json2ts';
import { brands } from './config';

const buildDefinitionPath = (config) => {
  const [buildFolder, platformFolder] = config.buildPath.split('/');

  return `${buildFolder}/${platformFolder}/index.d.ts`;
};

const fixTypeDefinitions = (types) => types
  .replace('RootObject', 'Theme')
  .replace(/;/gm, '')
  .replace(/(BorderRadiu)(\s|\n)/gm, '$1s$2');

const buildThemesInterface = (brandNames) => `
export interface BrandThemes {
  dark: Theme
  light: Theme
}

export interface Themes {
  ${brandNames.map((brand) => `${brand}: BrandThemes,\n\t`).join('')}
}
`;

const doAction = (dictionary, config) => {
  const definitionsPath = buildDefinitionPath(config);

  if (existsSync(path.join(__dirname, '../../', definitionsPath))) return false;

  const jsonFile = config.files.find(({ destination }) => destination.includes('.json'));
  const jsonThemeFile = fs.readFileSync(`${config.buildPath}${jsonFile.destination}`);
  const typeDefinitions = json2ts.convert(jsonThemeFile);

  const typeDefinitionFixes = fixTypeDefinitions(typeDefinitions);

  const finalDefinition = `
declare const Themes: Themes.Themes
declare namespace Themes {
  ${typeDefinitionFixes}
  ${buildThemesInterface(brands)}
}
export = Themes
`;

  return fs.writeFileSync(definitionsPath, finalDefinition);
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
