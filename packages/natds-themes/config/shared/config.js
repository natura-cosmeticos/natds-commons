import registerHtmlFormat from '../html/registerHtmlFormat';
import registerHtmlCreatePathsAction from '../html/registerCreatePathsAction';
import registerAttributesFormatter from '../android/registerAttributesFormat';
import registerThemeFormatAndroid from '../android/registerThemeFormat';
import { registerDpTransform } from '../android/registerDpTransform';
import { registerAttributeTypeTransform } from '../android/registerAttributeTypeTransform';
import { registerThemeFormat, registerThemeProtocolFormat } from '../ios/registerFormats';
import registerAttributeTypeTransformIos from '../ios/registerAttributeTypeTransform';
import { registerValueStringLiteralTransform } from '../ios/registerValueStringLiteralTransform';
import { registerTemplateHeaderHelper } from './templateHelpers';
import { registerCamelTransform } from './registerCamelTransform';
import { registerPxTransform } from './registerPxTransform';

export const brands = [
  'aesop',
  'avon',
  'natura',
  'theBodyShop',
];

export const modes = [
  'dark',
  'light',
];

export const platforms = [
  'android',
  'html',
  'ios',
  'react-native',
  'web',
  'css',
];

export const customFormats = [
  registerHtmlFormat,
  registerAttributesFormatter,
  registerThemeFormatAndroid,
  registerThemeFormat,
  registerThemeProtocolFormat,
];

export const customActions = [
  registerHtmlCreatePathsAction,
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
