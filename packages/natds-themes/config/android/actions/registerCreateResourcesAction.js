import fs from 'fs';
import { prop } from 'ramda';
import { isDimension, isColor, mapFilteredValues } from '../shared/helpers';
import { createOutputPathInfo } from '../../shared/helpers';

const outputPath = 'build/android';
const colorsOutputPath = `${outputPath}/colors.json`;
const dimensionsOutputPath = `${outputPath}/dimensions.json`;

export const dataBuilder = (filterFn) => (dictionary) => mapFilteredValues(
  dictionary.allProperties,
  filterFn,
  prop('value'),
);

const extractValuesForResourceOutput = (dictionary, config) => {
  createOutputPathInfo(
    colorsOutputPath,
    dataBuilder(isColor),
    dictionary,
    config,
  );
  createOutputPathInfo(dimensionsOutputPath, dataBuilder(isDimension), dictionary, config);
};

const deleteResourceFile = () => {
  fs.unlinkSync(colorsOutputPath);
  fs.unlinkSync(dimensionsOutputPath);
};

export const registerCreateResourcesAction = () => (
  {
    do: extractValuesForResourceOutput,
    name: 'create_resources',
    undo: deleteResourceFile,
  }
);

export default registerCreateResourcesAction;
