import registerHtmlFormat from '../html/registerHtmlFormat';
import registerHtmlCreatePathsAction from '../html/registerCreatePathsAction';
import registerAttributesFormatter from '../android/registerAttributesFormat';
import registerThemeFormatAndroid from '../android/registerThemeFormat';
import { registerDpTransform } from '../android/registerDpTransform';
import { registerAttributeTypeTransform } from '../android/registerAttributeTypeTransform';
import { registerColorsAction } from '../android/registerColorsAction';
import { registerThemeFormat, registerThemeProtocolFormat } from '../ios/registerFormats';
import registerAttributeTypeTransformIos from '../ios/registerAttributeTypeTransform';
import { registerValueStringLiteralTransform } from '../ios/registerValueStringLiteralTransform';
import { registerTemplateHeaderHelper } from './templateHelpers';
import { registerTypeDefinitionsAction } from './registerTypeDefinitionsAction';
import { registerCamelTransform } from './registerCamelTransform';
import { registerPxTransform } from './registerPxTransform';

export const customFormats = [
  registerHtmlFormat,
  registerAttributesFormatter,
  registerThemeFormatAndroid,
  registerThemeFormat,
  registerThemeProtocolFormat,
];

export const customActions = [
  registerHtmlCreatePathsAction,
  registerTypeDefinitionsAction,
  registerColorsAction,
];

export const customTransforms = [
  registerCamelTransform,
  registerDpTransform,
  registerAttributeTypeTransform,
  registerAttributeTypeTransformIos,
  registerValueStringLiteralTransform,
  registerPxTransform,
];

registerTemplateHeaderHelper();
