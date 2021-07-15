import { registerHtmlFormat, registerSpectrumHtmlFormat } from '../html/registerHtmlFormat';
import registerHtmlCreatePathsAction from '../html/registerCreatePathsAction';
import { registerSpectrumFormat as registerAndroidSpectrumFormat, registerAttributesFormat } from '../android/registerAttributesFormat';
import registerThemeFormatAndroid from '../android/registerThemeFormat';
import { registerDpTransform } from '../android/registerDpTransform';
import { registerAssetSnakeTransform } from '../android/registerAssetSnakeTransform';
import { registerAttributeTypeTransform } from '../android/registerAttributeTypeTransform';
import { registerCreateResourcesAction } from '../android/registerCreateResourcesAction';
import {
  registerThemeFormat,
  registerThemeProtocolFormat,
  registerSpectrumProtocolFormat,
  registerSpectrumFormat,
} from '../ios/registerFormats';
import registerAttributeTypeTransformIos from '../ios/registerAttributeTypeTransform';
import { registerValueStringLiteralTransform } from '../ios/registerValueStringLiteralTransform';
import { registerTemplateHeaderHelper } from './templateHelpers';
import { registerTypeDefinitionsAction } from './registerTypeDefinitionsAction';
import { registerCopyAssetsAction } from './registerCopyAssetsAction';
import { registerCamelTransform } from './registerCamelTransform';
import { registerPxTransform } from './registerPxTransform';
import { registerPrivatePropertiesFilter } from './registerPrivatePropertiesFilter';
import { registerAssetExtensionTransform } from './registerAssetExtensionTransform';
import { registerAssetInlineTransform } from './registerAssetInlineTransform';
import { registerOptimizeSvgTransform } from './registerOptimizeSvgTransform';
import { registerSpectrumPropertiesFilter } from './registerSpectrumPropertiesFilter';

export const customFormats = [
  registerHtmlFormat,
  registerAndroidSpectrumFormat,
  registerAttributesFormat,
  registerThemeFormatAndroid,
  registerThemeFormat,
  registerThemeProtocolFormat,
  registerSpectrumProtocolFormat,
  registerSpectrumFormat,
  registerSpectrumHtmlFormat,
];

export const customActions = [
  registerHtmlCreatePathsAction,
  registerTypeDefinitionsAction,
  registerCreateResourcesAction,
  registerCopyAssetsAction,
];

export const customTransforms = [
  registerCamelTransform,
  registerDpTransform,
  registerAttributeTypeTransform,
  registerAttributeTypeTransformIos,
  registerValueStringLiteralTransform,
  registerPxTransform,
  registerAssetExtensionTransform,
  registerAssetSnakeTransform,
  registerAssetInlineTransform,
  registerOptimizeSvgTransform,
];

export const customFilters = [
  registerPrivatePropertiesFilter,
  registerSpectrumPropertiesFilter,
];

registerTemplateHeaderHelper();
