/* eslint-disable import/no-unresolved */
// import webAesopDark from '../../tokens/web/search/aesop/dark'
// import webAesopLight from '../../tokens/web/search/aesop/light'
import webAvonDark from '../../tokens/web/search/avon/dark'
import webAvonLight from '../../tokens/web/search/avon/light'
import webAvonV2Dark from '../../tokens/web/search/avon_v2/dark'
import webAvonV2Light from '../../tokens/web/search/avon_v2/light'
import webBiomeDark from '../../tokens/web/search/biome/dark'
import webBiomeLight from '../../tokens/web/search/biome/light'
import webNaturaDark from '../../tokens/web/search/natura/dark'
import webNaturaLight from '../../tokens/web/search/natura/light'
import webTheBodyShopDark from '../../tokens/web/search/theBodyShop/dark'
import webTheBodyShopLight from '../../tokens/web/search/theBodyShop/light'

import webConsultoriaDeBelezaDark from '../../tokens/web/search/consultoriaDeBeleza/dark'
import webConsultoriaDeBelezaLight from '../../tokens/web/search/consultoriaDeBeleza/light'
import webNaturaV2Dark from '../../tokens/web/search/natura_v2/dark'
import webNaturaV2Light from '../../tokens/web/search/natura_v2/light'
import webCasaEestiloDark from '../../tokens/web/search/casaEestilo/dark'
import webCasaEestiloLight from '../../tokens/web/search/casaEestilo/light'

// import reactNativeAesopDark from '../../tokens/react-native/search/aesop/dark'
// import reactNativeAesopLight from '../../tokens/react-native/search/aesop/light'
import reactNativeAvonDark from '../../tokens/react-native/search/avon/dark'
import reactNativeAvonLight from '../../tokens/react-native/search/avon/light'
import reactNativeAvonV2Dark from '../../tokens/react-native/search/avon_v2/dark'
import reactNativeAvonV2Light from '../../tokens/react-native/search/avon_v2/light'
import reactNativeBiomeDark from '../../tokens/react-native/search/biome/dark'
import reactNativeBiomeLight from '../../tokens/react-native/search/biome/light'
import reactNativeNaturaDark from '../../tokens/react-native/search/natura/dark'
import reactNativeNaturaLight from '../../tokens/react-native/search/natura/light'
import reactNativeTheBodyShopDark from '../../tokens/react-native/search/theBodyShop/dark'
import reactNativeTheBodyShopLight from '../../tokens/react-native/search/theBodyShop/light'
import reactNativeCasaEestiloDark from '../../tokens/react-native/search/casaEestilo/dark'
import reactNativeCasaEestiloLight from '../../tokens/react-native/search/casaEestilo/light'

import reactNativeConsultoriaDeBelezaDark from '../../tokens/react-native/search/consultoriaDeBeleza/dark'
import reactNativeConsultoriaDeBelezaLight from '../../tokens/react-native/search/consultoriaDeBeleza/light'
import reactNativeNaturaV2Dark from '../../tokens/react-native/search/natura_v2/dark'
import reactNativeNaturaV2Light from '../../tokens/react-native/search/natura_v2/light'

// import androidAesopDark from '../../tokens/android/search/aesop/dark'
// import androidAesopLight from '../../tokens/android/search/aesop/light'
import androidAvonDark from '../../tokens/android/search/avon/dark'
import androidAvonLight from '../../tokens/android/search/avon/light'
import androidAvonV2Dark from '../../tokens/android/search/avon_v2/dark'
import androidAvonV2Light from '../../tokens/android/search/avon_v2/light'
import androidBiomeDark from '../../tokens/android/search/biome/dark'
import androidBiomeLight from '../../tokens/android/search/biome/light'
import androidNaturaDark from '../../tokens/android/search/natura/dark'
import androidNaturaLight from '../../tokens/android/search/natura/light'
import androidTheBodyShopDark from '../../tokens/android/search/the_body_shop/dark'
import androidTheBodyShopLight from '../../tokens/android/search/the_body_shop/light'

import androidConsultoriaDeBelezaDark from '../../tokens/android/search/consultoria_de_beleza/dark'
import androidConsultoriaDeBelezaLight from '../../tokens/android/search/consultoria_de_beleza/light'
import androidNaturaV2Dark from '../../tokens/android/search/natura_v2/dark'
import androidNaturaV2Light from '../../tokens/android/search/natura_v2/light'
import androidCasaEestiloDark from '../../tokens/android/search/casa_eestilo/dark'
import androidCasaEestiloLight from '../../tokens/android/search/casa_eestilo/light'

// import iosAesopDark from '../../tokens/ios/search/aesop/dark'
// import iosAesopLight from '../../tokens/ios/search/aesop/light'
import iosAvonDark from '../../tokens/ios/search/avon/dark'
import iosAvonLight from '../../tokens/ios/search/avon/light'
import iosAvonV2Dark from '../../tokens/ios/search/avon_v2/dark'
import iosAvonV2Light from '../../tokens/ios/search/avon_v2/light'
import iosBiomeDark from '../../tokens/ios/search/biome/dark'
import iosBiomeLight from '../../tokens/ios/search/biome/light'
import iosNaturaDark from '../../tokens/ios/search/natura/dark'
import iosNaturaLight from '../../tokens/ios/search/natura/light'
import iosTheBodyShopDark from '../../tokens/ios/search/theBodyShop/dark'
import iosTheBodyShopLight from '../../tokens/ios/search/theBodyShop/light'

import iosConsultoriaDeBelezaDark from '../../tokens/ios/search/consultoriaDeBeleza/dark'
import iosConsultoriaDeBelezaLight from '../../tokens/ios/search/consultoriaDeBeleza/light'
import iosNaturaV2Dark from '../../tokens/ios/search/natura_v2/dark'
import iosNaturaV2Light from '../../tokens/ios/search/natura_v2/light'
import iosCasaEestiloDark from '../../tokens/ios/search/casaEestilo/dark'
import iosCasaEestiloLight from '../../tokens/ios/search/casaEestilo/light'

import { buildTokensForBrand } from '../helpers'

export const tokens = {
  android: {
    // ...buildTokensForBrand('aesop')([androidAesopLight, androidAesopDark]),
    ...buildTokensForBrand('avon')([androidAvonLight, androidAvonDark]),
    ...buildTokensForBrand('avon_v2')([androidAvonV2Light, androidAvonV2Dark]),
    ...buildTokensForBrand('biome')([androidBiomeLight, androidBiomeDark]),
    ...buildTokensForBrand('natura')([androidNaturaLight, androidNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([androidTheBodyShopLight, androidTheBodyShopDark]),
    ...buildTokensForBrand('consultoriaDeBeleza')([androidConsultoriaDeBelezaLight, androidConsultoriaDeBelezaDark]),
    ...buildTokensForBrand('natura_v2')([androidNaturaV2Light, androidNaturaV2Dark]),
    ...buildTokensForBrand('casaEestilo')([androidCasaEestiloLight, androidCasaEestiloDark])
  },
  ios: {
    // ...buildTokensForBrand('aesop')([iosAesopLight, iosAesopDark]),
    ...buildTokensForBrand('avon')([iosAvonLight, iosAvonDark]),
    ...buildTokensForBrand('avon_v2')([iosAvonV2Light, iosAvonV2Dark]),
    ...buildTokensForBrand('biome')([iosBiomeLight, iosBiomeDark]),
    ...buildTokensForBrand('natura')([iosNaturaLight, iosNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([iosTheBodyShopLight, iosTheBodyShopDark]),
    ...buildTokensForBrand('consultoriaDeBeleza')([iosConsultoriaDeBelezaLight, iosConsultoriaDeBelezaDark]),
    ...buildTokensForBrand('natura_v2')([iosNaturaV2Light, iosNaturaV2Dark]),
    ...buildTokensForBrand('casaEestilo')([iosCasaEestiloLight, iosCasaEestiloDark])
  },
  reactNative: {
    // ...buildTokensForBrand('aesop')([reactNativeAesopLight, reactNativeAesopDark]),
    ...buildTokensForBrand('avon')([reactNativeAvonLight, reactNativeAvonDark]),
    ...buildTokensForBrand('avon_v2')([reactNativeAvonV2Light, reactNativeAvonV2Dark]),
    ...buildTokensForBrand('biome')([reactNativeBiomeLight, reactNativeBiomeDark]),
    ...buildTokensForBrand('natura')([reactNativeNaturaLight, reactNativeNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([reactNativeTheBodyShopLight, reactNativeTheBodyShopDark]),
    ...buildTokensForBrand('consultoriaDeBeleza')([reactNativeConsultoriaDeBelezaLight, reactNativeConsultoriaDeBelezaDark]),
    ...buildTokensForBrand('natura_v2')([reactNativeNaturaV2Light, reactNativeNaturaV2Dark]),
    ...buildTokensForBrand('casaEestilo')([reactNativeCasaEestiloLight, reactNativeCasaEestiloDark])
  },
  web: {
    // ...buildTokensForBrand('aesop')([webAesopLight, webAesopDark]),
    ...buildTokensForBrand('avon')([webAvonLight, webAvonDark]),
    ...buildTokensForBrand('avon_v2')([webAvonV2Light, webAvonV2Dark]),
    ...buildTokensForBrand('biome')([webBiomeLight, webBiomeDark]),
    ...buildTokensForBrand('natura')([webNaturaLight, webNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([webTheBodyShopLight, webTheBodyShopDark]),
    ...buildTokensForBrand('consultoriaDeBeleza')([webConsultoriaDeBelezaLight, webConsultoriaDeBelezaDark]),
    ...buildTokensForBrand('natura_v2')([webNaturaV2Light, webNaturaV2Dark]),
    ...buildTokensForBrand('casaEestilo')([webCasaEestiloLight, webCasaEestiloDark])
  }
}

export default tokens
