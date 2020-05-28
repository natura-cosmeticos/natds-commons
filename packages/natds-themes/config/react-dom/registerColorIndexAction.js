import fs from 'fs';
import { capitalizeWord } from '../shared/textHelpers';

const filePath = 'build/react-dom/paths.json';

export const createIndex = (dictionary, config) => {
  const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];

  const brandName = config.buildPath.split('/')[2];
  const mode = config.files[0].destination.split('.')[0];

  currentData.push({
    name: `${brandName}${capitalizeWord(mode)}ColorTokens`,
    path: `/${brandName}/${config.files[0].destination}`,
  });

  fs.writeFileSync(filePath, JSON.stringify(currentData));
};

export const deleteIndex = () => fs.unlinkSync(filePath);

const registerCreatePathsAction = () => (
  {
    do: createIndex,
    name: 'create_index',
    undo: deleteIndex,
  }
);

export default registerCreatePathsAction;
