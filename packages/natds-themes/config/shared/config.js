import registerHtmlFormat from '../html/registerHtmlFormat';
import registerHtmlCreatePathsAction from '../html/registerCreatePathsAction';
import registerAttributesFormatter from '../android/registerAttributesFormat';
import registerThemeFormat from '../android/registerThemeFormat';
import { registerDpTransform } from '../android/registerDpTransform';
import { registerAttributeTypeTransform } from '../android/registerAttributeTypeTransform';
import registerStructFormat from '../ios/registerStructFormat';
import registerProtocolFormat from '../ios/registerProtocolFormat';
import registerDynamicColorFormat from '../ios/registerDynamicColorFormat';
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
  'react-dom',
  'html',
  'android',
  'ios',
];

export const customFormats = [
  registerHtmlFormat,
  registerAttributesFormatter,
  registerThemeFormat,
  registerStructFormat,
  registerProtocolFormat,
  registerDynamicColorFormat,
];

export const customActions = [
  registerHtmlCreatePathsAction,
];

export const customTransforms = [
  registerCamelTransform,
  registerDpTransform,
  registerAttributeTypeTransform,
];

registerTemplateHeaderHelper();
