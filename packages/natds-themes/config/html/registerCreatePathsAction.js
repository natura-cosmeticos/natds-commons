import fs from 'fs';

const filePath = 'build/html/paths.json';

export const createPaths = (dictionary, config) => {
  const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];

  const brandName = config.buildPath.split('/')[2];
  const mode = config.files[0].destination.split('.')[0];

  currentData.push({
    name: `${brandName} ${mode}`,
    path: `/${brandName}/${config.files[0].destination}`,
  });

  fs.writeFileSync(filePath, JSON.stringify(currentData));
};

export const deletePaths = () => fs.unlinkSync(filePath);

const registerCreatePathsAction = () => (
  {
    do: createPaths,
    name: 'create_paths_html',
    undo: deletePaths,
  }
);

export default registerCreatePathsAction;
