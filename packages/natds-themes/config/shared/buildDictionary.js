import StyleDictionary from 'style-dictionary';
import {
  customActions, customFilters, customFormats, customTransforms,
} from './config';
import { buildConfig } from './buildConfig';

export const buildDictionary = (brand, mode, platform) => {
  const dictionary = StyleDictionary.extend(buildConfig(brand, mode, platform));

  customFormats.forEach((registerFunction) => dictionary.registerFormat(registerFunction()));
  customActions.forEach((registerFunction) => dictionary.registerAction(registerFunction()));
  customTransforms.forEach((registerFunction) => dictionary.registerTransform(registerFunction()));
  customFilters.forEach((registerFunction) => dictionary.registerFilter(registerFunction()));

  dictionary.buildPlatform(platform);
};

export default buildDictionary;
