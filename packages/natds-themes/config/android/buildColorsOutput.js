import fs from 'fs';
import path from 'path';
import CryptoJS from 'crypto-js';
import { compileTemplate } from '../shared/templateHelpers';

export const buildColorsOutput = () => {
  const colorsPath = path.resolve(__dirname, '../../build/android');
  const templatePath = path.resolve(__dirname, './templates/colors.hbs');

  const colors = fs.readFileSync(`${colorsPath}/colors.json`);
  const uniqueColorsKeys = [...new Set(JSON.parse(colors))];
  const uniqueColors = uniqueColorsKeys.map((item) => ({ [`ssot${CryptoJS.MD5(item)}`]: item }));

  const template = compileTemplate(templatePath);

  const colorsXml = template({ colors: uniqueColors });

  fs.writeFileSync(`${colorsPath}/colors.xml`, colorsXml);
};

export default buildColorsOutput;
