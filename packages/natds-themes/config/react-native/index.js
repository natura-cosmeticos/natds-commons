import config from './buildReactNativeConfig';
import { registerConvertFontWeightToString } from './transforms/registerConvertFontWeightToString';

export default {
  actions: [],
  config,
  formats: [],
  transforms: [
    registerConvertFontWeightToString,
  ],
};
