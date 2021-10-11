import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

export const compileTemplate = (templatePath) => {
  const templateFile = fs.readFileSync(templatePath).toString();
  const template = Handlebars.compile(templateFile, { noEscape: true });

  return template;
};

export const registerTemplateHeaderHelper = () => {
  const template = fs.readFileSync(path.resolve(__dirname, '../templates/fileHeader.hbs')).toString();

  Handlebars.registerHelper('natdsThemesVersion', () => {
    const packageJsonString = fs
      .readFileSync(path.resolve('package.json'))
      .toString();

    return JSON.parse(packageJsonString).version;
  });

  Handlebars.registerPartial('fileHeader', template);
};

export default {
  compileTemplate,
  registerTemplateHeaderHelper,
};
