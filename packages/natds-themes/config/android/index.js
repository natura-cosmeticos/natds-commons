import androidConfig from './buildAndroidConfig';
import { registerAssetSnakeTransform } from './transforms/registerAssetSnakeTransform';
import { registerAttributeTypeTransform } from './transforms/registerAttributeTypeTransform';
import { registerDpTransform } from './transforms/registerDpTransform';
import { registerAttributesFormat, registerSpectrumFormat } from './formats/registerAttributesFormat';
import registerAndroidThemeFormat from './formats/registerThemeFormat';
import { registerCreateResourcesAction } from './actions/registerCreateResourcesAction';

export default {
  actions: [registerCreateResourcesAction],
  config: androidConfig,
  formats: [registerAndroidThemeFormat, registerAttributesFormat, registerSpectrumFormat],
  transforms: [registerDpTransform, registerAttributeTypeTransform, registerAssetSnakeTransform],
};
