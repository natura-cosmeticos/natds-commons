import StyleDictionary from 'style-dictionary';
import buildConfig from './buildConfig';
import registerHtmlFormat from './html/registerHtmlFormat';
import registerHtmlCreatePathsAction from './html/registerCreatePathsAction';
import registerAttributesFormatter from './android/registerAttributesFormat';
import registerThemeFormat from './android/registerThemeFormat';
import registerColorStructFormat from './ios/registerColorStructFormat';
import registerColorPalletProtocolFormat from './ios/registerColorPalletProtocolFormat';
import registerDynamicColorFormat from './ios/registerDynamicColorFormat';
import registerReactCreatePathsAction from './react-dom/registerCreatePathsAction';

const brands = [
  'natura',
  'theBodyShop',
  'avon',
];

const modes = [
  'light',
  'dark',
];

const platforms = [
  'react-native',
  'react-dom',
  'html',
  'android',
  'ios',
];

const customFormats = [
  registerHtmlFormat,
  registerAttributesFormatter,
  registerThemeFormat,
  registerColorStructFormat,
  registerColorPalletProtocolFormat,
  registerDynamicColorFormat,
];

const customActions = [
  registerHtmlCreatePathsAction,
  registerReactCreatePathsAction,
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
