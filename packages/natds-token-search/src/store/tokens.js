import webAesopDark from '../../../natds-themes/build/web/aesop/dark-esm';
import webAesopLight from '../../../natds-themes/build/web/aesop/light-esm';
import webAvonDark from '../../../natds-themes/build/web/avon/dark-esm';
import webAvonLight from '../../../natds-themes/build/web/avon/light-esm';
import webNaturaDark from '../../../natds-themes/build/web/natura/dark-esm';
import webNaturaLight from '../../../natds-themes/build/web/natura/light-esm';
import webTheBodyShopDark from '../../../natds-themes/build/web/theBodyShop/dark-esm';
import webTheBodyShopLight from '../../../natds-themes/build/web/theBodyShop/light-esm';
import reactNativeAesopDark from '../../../natds-themes/build/react-native/aesop/dark';
import reactNativeAesopLight from '../../../natds-themes/build/react-native/aesop/light';
import reactNativeAvonDark from '../../../natds-themes/build/react-native/avon/dark';
import reactNativeAvonLight from '../../../natds-themes/build/react-native/avon/light';
import reactNativeNaturaDark from '../../../natds-themes/build/react-native/natura/dark';
import reactNativeNaturaLight from '../../../natds-themes/build/react-native/natura/light';
import reactNativeTheBodyShopDark from '../../../natds-themes/build/react-native/theBodyShop/dark';
import reactNativeTheBodyShopLight from '../../../natds-themes/build/react-native/theBodyShop/light';
import androidAesopDark from '../../../natds-themes/build/android/aesop/dark';
import androidAesopLight from '../../../natds-themes/build/android/aesop/light';
import androidAvonDark from '../../../natds-themes/build/android/avon/dark';
import androidAvonLight from '../../../natds-themes/build/android/avon/light';
import androidNaturaDark from '../../../natds-themes/build/android/natura/dark';
import androidNaturaLight from '../../../natds-themes/build/android/natura/light';
import androidTheBodyShopDark from '../../../natds-themes/build/android/theBodyShop/dark';
import androidTheBodyShopLight from '../../../natds-themes/build/android/theBodyShop/light';
import iosAesopDark from '../../../natds-themes/build/ios/AesopDark';
import iosAesopLight from '../../../natds-themes/build/ios/AesopLight';
import iosAvonDark from '../../../natds-themes/build/ios/AvonDark';
import iosAvonLight from '../../../natds-themes/build/ios/AvonLight';
import iosNaturaDark from '../../../natds-themes/build/ios/NaturaDark';
import iosNaturaLight from '../../../natds-themes/build/ios/NaturaLight';
import iosTheBodyShopDark from '../../../natds-themes/build/ios/TheBodyShopDark';
import iosTheBodyShopLight from '../../../natds-themes/build/ios/TheBodyShopLight';
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
