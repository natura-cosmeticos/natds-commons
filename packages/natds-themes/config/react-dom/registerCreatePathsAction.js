import fs from 'fs';
import { capitalizeWord } from '../shared/textHelpers';
import { createOutputPathInfo } from '../shared/createOutputPathInfo';

const filePath = 'build/react-dom/paths.json';

export const dataBuilderFunction = (dictionary, config) => {
  const brandName = config.buildPath.split('/')[2];
  const mode = config.files[0].destination.split('.')[0];

  return {
    name: `${brandName}${capitalizeWord(mode)}ColorTokens`,
    path: `/${brandName}/${config.files[0].destination}`,
  };
};

export const createPaths = (
  dictionary,
  config,
) => createOutputPathInfo(filePath, dataBuilderFunction, dictionary, config);

export const deletePaths = () => fs.unlinkSync(filePath);

const registerCreatePathsAction = () => (
  {
    do: createPaths,
    name: 'create_paths_react_dom',
    undo: deletePaths,
  }
);

export default registerCreatePathsAction;
