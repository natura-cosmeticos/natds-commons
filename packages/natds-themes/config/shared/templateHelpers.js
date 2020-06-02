import fs from 'fs';
import Handlebars from 'handlebars';

export const compileTemplate = (templatePath) => {
  const templateFile = fs.readFileSync(templatePath).toString();
  const template = Handlebars.compile(templateFile);

  return template;
};

export default {
  compileTemplate,
};
