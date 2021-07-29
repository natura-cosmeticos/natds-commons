import config from './buildIosConfig';
import { registerAttributeTypeTransform } from './transforms/registerAttributeTypeTransform';
import { registerValueStringLiteralTransform } from './transforms/registerValueStringLiteralTransform';
import {
  registerSpectrumFormat,
  registerThemeFormat,
  registerThemeProtocolFormat,
  registerSpectrumProtocolFormat,
} from './formats/registerFormats';

export default {
  actions: [],
  config,
  formats: [
    registerSpectrumFormat,
    registerThemeFormat,
    registerThemeProtocolFormat,
    registerSpectrumProtocolFormat,
  ],
  transforms: [registerAttributeTypeTransform, registerValueStringLiteralTransform],
};
