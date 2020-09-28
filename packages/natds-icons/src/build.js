/* eslint-disable no-console */
const configFilePath = `${__dirname}/../config/config.json`;
const StyleDictionary = require('style-dictionary').extend(configFilePath);
const createFontFilesAction = require('./actions/createFontFilesAction');
const optimizeSvgIconAction = require('./actions/optimizeSvgIconAction');
const cssIconsFormat = require('./formats/css/icons');
const htmlIconsFormat = require('./formats/html/icons');

console.info('Build started...');
console.info('\n==============================================');

StyleDictionary.registerAction(optimizeSvgIconAction);
StyleDictionary.registerAction(createFontFilesAction);
StyleDictionary.registerFormat(cssIconsFormat);
StyleDictionary.registerFormat(htmlIconsFormat);
StyleDictionary.buildAllPlatforms();

console.info('\n==============================================');
console.info('\nBuild completed!');
