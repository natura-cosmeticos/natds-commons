import fs from 'fs';
import { createOutputPathInfo } from '../shared/createOutputPathInfo';

const filePath = 'build/html/paths.json';

const dataBuilderFunction = (dictionary, config) => {
  const brandName = config.buildPath.split('/')[2];

  return config.files.map((file) => {
    const mode = file.destination.split('.')[0];

    return {
      name: `${brandName} ${mode}`,
      path: `/${brandName}/${file.destination}`,
    };
  });
};

export const createPaths = (
  dictionary,
  config,
) => createOutputPathInfo(filePath, dataBuilderFunction, dictionary, config);

export const deletePaths = () => fs.unlinkSync(filePath);

const registerCreatePathsAction = () => (
  {
    do: createPaths,
    name: 'create_paths_html',
    undo: deletePaths,
  }
);

export default registerCreatePathsAction;
