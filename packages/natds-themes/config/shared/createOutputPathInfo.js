import fs from 'fs';

export const createOutputPathInfo = (filePath, dataBuilderFunction, dictionary, config) => {
  const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];
  const data = dataBuilderFunction(dictionary, config);

  currentData.push(data);

  fs.writeFileSync(filePath, JSON.stringify(currentData));
};

export default {
  createOutputPathInfo,
};
