import path from 'path';
import fs from 'fs';
import { compileTemplate } from '../shared/templateHelpers';

export const createColorIndex = () => {
  const dataPath = path.resolve(__dirname, '../../build/react-dom/paths.json');
  const templatePath = path.resolve(__dirname, './templates/colorIndex.hbs');
  const outputPath = './build/react-dom/index.js';

  const template = compileTemplate(templatePath);

  const paths = fs.readFileSync(dataPath).toString();

  const result = template({ paths: JSON.parse(paths) });

  fs.writeFileSync(outputPath, result);
};

export default createColorIndex;
