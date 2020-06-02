import fs from 'fs';
import Handlebars from 'handlebars';

export const formatBuilder = (name, templatePath, templateDataBuilder) => {
  const html = fs.readFileSync(templatePath).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = (dictionary, platform) => {
    const templateData = templateDataBuilder(dictionary, platform);

    return htmlTemplate(templateData);
  };

  return {
    formatter,
    name,
  };
};

export default {
  formatBuilder,
};
