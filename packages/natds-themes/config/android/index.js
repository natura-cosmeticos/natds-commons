import androidConfig from './buildAndroidConfig'
import { registerAssetSnakeTransform } from './transforms/registerAssetSnakeTransform'
import { registerAttributeTypeTransform } from './transforms/registerAttributeTypeTransform'
import { registerDpTransform } from './transforms/registerDpTransform'
import { registerFontWeightTransform } from './transforms/registerFontWeightTransform'
import { registerAlphaTransform } from './transforms/registerAlphaTransform'
import { registerAttributesFormat, registerSpectrumFormat } from './formats/registerAttributesFormat'
import registerAndroidThemeFormat from './formats/registerThemeFormat'
import { registerCreateResourcesAction } from './actions/registerCreateResourcesAction'
import { registerConvertDrawablesAction } from './actions/registerConvertDrawablesAction'

export default {
  actions: [
    registerCreateResourcesAction,
    registerConvertDrawablesAction
  ],
  config: androidConfig,
  formats: [
    registerAndroidThemeFormat,
    registerAttributesFormat,
    registerSpectrumFormat
  ],
  transforms: [
    registerDpTransform,
    registerAttributeTypeTransform,
    registerAssetSnakeTransform,
    registerFontWeightTransform,
    registerAlphaTransform
  ]
}
