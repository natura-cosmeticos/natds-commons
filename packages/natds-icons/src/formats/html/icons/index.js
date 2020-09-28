const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const getIconsFromDictionary = require('../../../getIconsFromDictionary');

const templateFile = fs.readFileSync(path.resolve(__dirname, 'template.html.hbs'));
const templateContent = templateFile.toString();
const template = Handlebars.compile(templateContent);

const htmlIconsFormat = {
  formatter(dictionary, platform) {
    return template({
      options: platform,
      properties: getIconsFromDictionary(dictionary),
    });
  },
  name: 'html/icons',
};

module.exports = htmlIconsFormat;
