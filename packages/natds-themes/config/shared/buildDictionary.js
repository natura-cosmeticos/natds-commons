import StyleDictionary from 'style-dictionary';
import { customActions, customFormats } from './config';
import { buildConfig } from './buildConfig';

export const buildDictionary = (brand, mode, platform) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${platform}] [${brand}]`);

  const dictionary = StyleDictionary.extend(buildConfig(brand, mode));

  customFormats.forEach(registerFunction => dictionary.registerFormat(registerFunction()));
  customActions.forEach(registerFunction => dictionary.registerAction(registerFunction()));

  dictionary.buildPlatform(platform);

  console.log('\nEnd processing');
};

export default buildDictionary;
