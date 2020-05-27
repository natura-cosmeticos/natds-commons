import StyleDictionary from 'style-dictionary';
import buildConfig from './buildConfig';
import registerHtmlFormat from './html/registerHtmlFormat';
import registerCreatePathsAction from './html/registerCreatePathsAction';
import registerAttributesFormatter from './android/registerAttributesFormat';
import registerThemeFormat from './android/registerThemeFormat';
import registerStructFormat from './ios/registerStructFormat';
import registerProtocolColorPalletFormat from './ios/registerProtocolColorPalletFormat';

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
  'android',
  'ios',
];

const customFormats = [
  registerHtmlFormat,
  registerAttributesFormatter,
  registerThemeFormat,
  registerStructFormat,
  registerProtocolColorPalletFormat,
];

const customActions = [
  registerCreatePathsAction,
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
