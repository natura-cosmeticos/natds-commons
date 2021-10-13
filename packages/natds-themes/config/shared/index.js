import { registerCopyAssetsAction } from './actions/registerCopyAssetsAction';
import { registerTypeDefinitionsAction } from './actions/registerTypeDefinitionsAction';
import { registerCreateTypefaceAction } from './actions/registerCreateTypefaceAction';
import { registerPrivatePropertiesFilter } from './filters/registerPrivatePropertiesFilter';
import { registerTokenSearchPropertiesFilter } from './filters/registerTokenSearchPropertiesFilter';
import { registerSpectrumPropertiesFilter } from './filters/registerSpectrumPropertiesFilter';
import { registerAssetExtensionTransform } from './transforms/registerAssetExtensionTransform';
import { registerAssetInlineTransform } from './transforms/registerAssetInlineTransform';
import { registerCamelTransform } from './transforms/registerCamelTransform';
import { registerOptimizeSvgTransform } from './transforms/registerOptimizeSvgTransform';
import { registerPxTransform } from './transforms/registerPxTransform';
import { registerFillToCssTransform } from './transforms/registerFillToCssTransform';
import { registerFontFamilyStringTransform } from './transforms/registerFontFamilyStringTransform';

export default {
  actions: [
    registerTypeDefinitionsAction,
    registerCopyAssetsAction,
    registerCreateTypefaceAction,
  ],
  filters: [
    registerPrivatePropertiesFilter,
    registerSpectrumPropertiesFilter,
    registerTokenSearchPropertiesFilter,
  ],
  transforms: [
    registerAssetExtensionTransform,
    registerAssetInlineTransform,
    registerCamelTransform,
    registerOptimizeSvgTransform,
    registerPxTransform,
    registerFillToCssTransform,
    registerFontFamilyStringTransform,
  ],
};
