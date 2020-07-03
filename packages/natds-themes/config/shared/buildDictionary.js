import StyleDictionary from 'style-dictionary';
import { customActions, customFormats, customTransforms } from './config';
import { buildConfig } from './buildConfig';

export const buildDictionary = (brand, mode, platform) => {
  const dictionary = StyleDictionary.extend(buildConfig(brand, mode));

  customFormats.forEach(registerFunction => dictionary.registerFormat(registerFunction()));
  customActions.forEach(registerFunction => dictionary.registerAction(registerFunction()));
  customTransforms.forEach(registerFunction => dictionary.registerTransform(registerFunction()));

  dictionary.buildPlatform(platform);
};

export default buildDictionary;
