import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';

export const createColorIndex = () => {
  const dataPath = path.resolve(__dirname, '../../build/react-dom/paths.json');
  const templatePath = path.resolve(__dirname, './templates/colorIndex.hbs');
  const outputPath = './build/react-dom/index.js';

  const html = fs.readFileSync(templatePath).toString();
  const htmlTemplate = Handlebars.compile(html);

  const paths = fs.readFileSync(dataPath).toString();

  const result = htmlTemplate({ paths: JSON.parse(paths) });

  fs.writeFileSync(outputPath, result);
};

export default createColorIndex;
