/* eslint-disable import/no-unresolved */
import webAesopDark from '../../tokens/web/aesop/dark-esm';
import webAesopLight from '../../tokens/web/aesop/light-esm';
import webAvonDark from '../../tokens/web/avon/dark-esm';
import webAvonLight from '../../tokens/web/avon/light-esm';
import webNaturaDark from '../../tokens/web/natura/dark-esm';
import webNaturaLight from '../../tokens/web/natura/light-esm';
import webTheBodyShopDark from '../../tokens/web/theBodyShop/dark-esm';
import webTheBodyShopLight from '../../tokens/web/theBodyShop/light-esm';
import reactNativeAesopDark from '../../tokens/react-native/aesop/dark';
import reactNativeAesopLight from '../../tokens/react-native/aesop/light';
import reactNativeAvonDark from '../../tokens/react-native/avon/dark';
import reactNativeAvonLight from '../../tokens/react-native/avon/light';
import reactNativeNaturaDark from '../../tokens/react-native/natura/dark';
import reactNativeNaturaLight from '../../tokens/react-native/natura/light';
import reactNativeTheBodyShopDark from '../../tokens/react-native/theBodyShop/dark';
import reactNativeTheBodyShopLight from '../../tokens/react-native/theBodyShop/light';
import androidAesopDark from '../../tokens/android/aesop/dark';
import androidAesopLight from '../../tokens/android/aesop/light';
import androidAvonDark from '../../tokens/android/avon/dark';
import androidAvonLight from '../../tokens/android/avon/light';
import androidNaturaDark from '../../tokens/android/natura/dark';
import androidNaturaLight from '../../tokens/android/natura/light';
import androidTheBodyShopDark from '../../tokens/android/theBodyShop/dark';
import androidTheBodyShopLight from '../../tokens/android/theBodyShop/light';
import iosAesopDark from '../../tokens/ios/AesopDark';
import iosAesopLight from '../../tokens/ios/AesopLight';
import iosAvonDark from '../../tokens/ios/AvonDark';
import iosAvonLight from '../../tokens/ios/AvonLight';
import iosNaturaDark from '../../tokens/ios/NaturaDark';
import iosNaturaLight from '../../tokens/ios/NaturaLight';
import iosTheBodyShopDark from '../../tokens/ios/TheBodyShopDark';
import iosTheBodyShopLight from '../../tokens/ios/TheBodyShopLight';
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
