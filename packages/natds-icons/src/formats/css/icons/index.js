const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const getIconsFromDictionary = require('../../../getIconsFromDictionary');
const unicodeToCss = require('../../../helpers/unicodeToCss');

const templateFile = fs.readFileSync(path.resolve(__dirname, 'template.css.hbs'));
const templateContent = templateFile.toString();
const template = Handlebars.compile(templateContent);

Handlebars.registerHelper('unicodeToCss', unicodeToCss);

const cssIconsFormat = {
  formatter(dictionary, platform) {
    const properties = getIconsFromDictionary(dictionary);

    return template({
      options: platform,
      properties,
    });
  },
  name: 'css/icons',
};

module.exports = cssIconsFormat;
