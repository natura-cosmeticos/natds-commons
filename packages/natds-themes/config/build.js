import StyleDictionary from 'style-dictionary';
import buildConfig from './buildConfig.js';
import registerHtmlFormat from './html/registerHtmlFormat.js';
import registerIndexHtmlAction from './html/registerIndexHtmlAction.js';

const brands = [
  'natura',
  'tbs',
  'avon',
];

const modes = [
  'light',
  'dark',
];

const platforms = [
  'react-native',
  'html',
];

const customFormats = [
  registerHtmlFormat,
];

const customActions = [
  registerIndexHtmlAction,
];

const buildDictionary = (brand, mode, platform) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${platform}] [${brand}]`);

  const dictionary = StyleDictionary.extend(buildConfig(brand, mode));

  customFormats.forEach(registerFunction => dictionary.registerFormat(registerFunction()));
  customActions.forEach(registerFunction => dictionary.registerAction(registerFunction()));

  dictionary.buildPlatform(platform);

  console.log('\nEnd processing');
};

brands
  .map(brand => modes
    .map(mode => platforms
      .map(platform => buildDictionary(brand, mode, platform))));
