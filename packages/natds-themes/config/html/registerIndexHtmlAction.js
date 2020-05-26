import fs from 'fs';

const filePath = 'build/html/paths.json';

const doHandler = (dictionary, config) => {
  const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];

  const brandName = config.buildPath.split('/')[2];
  const mode = config.files[0].destination.split('.')[0];

  currentData.push({
    name: `${brandName} ${mode}`,
    path: `/${brandName}/${config.files[0].destination}`,
  });

  fs.writeFileSync(filePath, JSON.stringify(currentData));
};

const undoHandler = () => fs.removeSync(filePath);

const registerIndexHtmlAction = () => (
  {
    do: doHandler,
    name: 'create_index_html',
    undo: undoHandler,
  }
);

export default registerIndexHtmlAction;
