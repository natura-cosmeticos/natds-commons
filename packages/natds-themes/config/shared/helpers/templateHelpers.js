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

  Handlebars.registerHelper('date', () => new Date().toDateString());

  Handlebars.registerPartial('fileHeader', template);
};

export default {
  compileTemplate,
  registerTemplateHeaderHelper,
};
