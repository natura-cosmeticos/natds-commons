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

export const brands = [
  'natura',
  'theBodyShop',
  'avon',
];

export const modes = [
  'light',
  'dark',
];

export const platforms = [
  'react-native',
  'web',
  'html',
  'android',
  'ios',
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
];

registerTemplateHeaderHelper();
