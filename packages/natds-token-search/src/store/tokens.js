/* eslint-disable import/no-unresolved */
import webAesopDark from '../../tokens/web/search/aesop/dark';
import webAesopLight from '../../tokens/web/search/aesop/light';
import webAvonDark from '../../tokens/web/search/avon/dark';
import webAvonLight from '../../tokens/web/search/avon/light';
import webNaturaDark from '../../tokens/web/search/natura/dark';
import webNaturaLight from '../../tokens/web/search/natura/light';
import webTheBodyShopDark from '../../tokens/web/search/theBodyShop/dark';
import webTheBodyShopLight from '../../tokens/web/search/theBodyShop/light';
import reactNativeAesopDark from '../../tokens/react-native/search/aesop/dark';
import reactNativeAesopLight from '../../tokens/react-native/search/aesop/light';
import reactNativeAvonDark from '../../tokens/react-native/search/avon/dark';
import reactNativeAvonLight from '../../tokens/react-native/search/avon/light';
import reactNativeNaturaDark from '../../tokens/react-native/search/natura/dark';
import reactNativeNaturaLight from '../../tokens/react-native/search/natura/light';
import reactNativeTheBodyShopDark from '../../tokens/react-native/search/theBodyShop/dark';
import reactNativeTheBodyShopLight from '../../tokens/react-native/search/theBodyShop/light';
import androidAesopDark from '../../tokens/android/search/aesop/dark';
import androidAesopLight from '../../tokens/android/search/aesop/light';
import androidAvonDark from '../../tokens/android/search/avon/dark';
import androidAvonLight from '../../tokens/android/search/avon/light';
import androidNaturaDark from '../../tokens/android/search/natura/dark';
import androidNaturaLight from '../../tokens/android/search/natura/light';
import androidTheBodyShopDark from '../../tokens/android/search/theBodyShop/dark';
import androidTheBodyShopLight from '../../tokens/android/search/theBodyShop/light';
import iosAesopDark from '../../tokens/ios/search/aesop/dark';
import iosAesopLight from '../../tokens/ios/search/aesop/light';
import iosAvonDark from '../../tokens/ios/search/avon/dark';
import iosAvonLight from '../../tokens/ios/search/avon/light';
import iosNaturaDark from '../../tokens/ios/search/natura/dark';
import iosNaturaLight from '../../tokens/ios/search/natura/light';
import iosTheBodyShopDark from '../../tokens/ios/search/theBodyShop/dark';
import iosTheBodyShopLight from '../../tokens/ios/search/theBodyShop/light';
import { buildTokensForBrand } from '../helpers';

export const tokens = {
  android: {
    ...buildTokensForBrand('aesop')([androidAesopLight, androidAesopDark]),
    ...buildTokensForBrand('avon')([androidAvonLight, androidAvonDark]),
    ...buildTokensForBrand('natura')([androidNaturaLight, androidNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([androidTheBodyShopLight, androidTheBodyShopDark]),
  },
  ios: {
    ...buildTokensForBrand('aesop')([iosAesopLight, iosAesopDark]),
    ...buildTokensForBrand('avon')([iosAvonLight, iosAvonDark]),
    ...buildTokensForBrand('natura')([iosNaturaLight, iosNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([iosTheBodyShopLight, iosTheBodyShopDark]),
  },
  reactNative: {
    ...buildTokensForBrand('aesop')([reactNativeAesopLight, reactNativeAesopDark]),
    ...buildTokensForBrand('avon')([reactNativeAvonLight, reactNativeAvonDark]),
    ...buildTokensForBrand('natura')([reactNativeNaturaLight, reactNativeNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([reactNativeTheBodyShopLight, reactNativeTheBodyShopDark]),
  },
  web: {
    ...buildTokensForBrand('aesop')([webAesopLight, webAesopDark]),
    ...buildTokensForBrand('avon')([webAvonLight, webAvonDark]),
    ...buildTokensForBrand('natura')([webNaturaLight, webNaturaDark]),
    ...buildTokensForBrand('theBodyShop')([webTheBodyShopLight, webTheBodyShopDark]),
  },
};

export default tokens;
