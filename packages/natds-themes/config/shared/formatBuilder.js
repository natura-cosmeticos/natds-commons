import { compileTemplate } from './templateHelpers';

export const formatBuilder = (name, templatePath, templateDataBuilder) => {
  const htmlTemplate = compileTemplate(templatePath);

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
