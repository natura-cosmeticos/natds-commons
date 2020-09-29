import fs from 'fs';
import { createOutputPathInfo } from '../shared/createOutputPathInfo';
import { isDimension, isColor, mapFilteredValues } from './helpers';

const outputPath = 'build/android';
const colorsOutputPath = `${outputPath}/colors.json`;
const dimensionsOutputPath = `${outputPath}/dimensions.json`;

const getItemValue = (item) => item.value;

const dataBuilder = (filterFn) => (dictionary) => mapFilteredValues(
  dictionary.allProperties,
  filterFn,
  getItemValue,
);

export const extractValuesForResourceOutput = (dictionary, config) => {
  createOutputPathInfo(colorsOutputPath, dataBuilder(isColor), dictionary, config);
  createOutputPathInfo(dimensionsOutputPath, dataBuilder(isDimension), dictionary, config);
};

export const deletePaths = () => {
  fs.unlinkSync(colorsOutputPath);
};

export const registerColorsAction = () => (
  {
    do: extractValuesForResourceOutput,
    name: 'create_colors_android',
    undo: deletePaths,
  }
);

export default registerColorsAction;
