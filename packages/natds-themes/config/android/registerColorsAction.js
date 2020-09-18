import fs from 'fs';
import { createOutputPathInfo } from '../shared/createOutputPathInfo';
import { isProp } from '../shared/helpers';

const filePath = 'build/android/colors.json';

const dataBuilderFunction = (dictionary) => dictionary
  .allProperties
  .filter((item) => isProp(item, 'color'))
  .map((item) => item.value);

export const createPaths = (
  dictionary,
  config,
) => createOutputPathInfo(filePath, dataBuilderFunction, dictionary, config);

export const deletePaths = () => fs.unlinkSync(filePath);

export const registerColorsAction = () => (
  {
    do: createPaths,
    name: 'create_colors_android',
    undo: deletePaths,
  }
);

export default registerColorsAction;
