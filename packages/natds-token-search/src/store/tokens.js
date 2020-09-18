import webAesopDark from '@naturacosmeticos/natds-themes/build/web/aesop/dark-esm';
import webAesopLight from '@naturacosmeticos/natds-themes/build/web/aesop/light-esm';
import webAvonDark from '@naturacosmeticos/natds-themes/build/web/avon/dark-esm';
import webAvonLight from '@naturacosmeticos/natds-themes/build/web/avon/light-esm';
import webNaturaDark from '@naturacosmeticos/natds-themes/build/web/natura/dark-esm';
import webNaturaLight from '@naturacosmeticos/natds-themes/build/web/natura/light-esm';
import webTheBodyShopDark from '@naturacosmeticos/natds-themes/build/web/theBodyShop/dark-esm';
import webTheBodyShopLight from '@naturacosmeticos/natds-themes/build/web/theBodyShop/light-esm';
import reactNativeAesopDark from '@naturacosmeticos/natds-themes/build/react-native/aesop/dark';
import reactNativeAesopLight from '@naturacosmeticos/natds-themes/build/react-native/aesop/light';
import reactNativeAvonDark from '@naturacosmeticos/natds-themes/build/react-native/avon/dark';
import reactNativeAvonLight from '@naturacosmeticos/natds-themes/build/react-native/avon/light';
import reactNativeNaturaDark from '@naturacosmeticos/natds-themes/build/react-native/natura/dark';
import reactNativeNaturaLight from '@naturacosmeticos/natds-themes/build/react-native/natura/light';
import reactNativeTheBodyShopDark from '@naturacosmeticos/natds-themes/build/react-native/theBodyShop/dark';
import reactNativeTheBodyShopLight from '@naturacosmeticos/natds-themes/build/react-native/theBodyShop/light';
import androidAesopDark from '@naturacosmeticos/natds-themes/build/android/aesop/dark';
import androidAesopLight from '@naturacosmeticos/natds-themes/build/android/aesop/light';
import androidAvonDark from '@naturacosmeticos/natds-themes/build/android/avon/dark';
import androidAvonLight from '@naturacosmeticos/natds-themes/build/android/avon/light';
import androidNaturaDark from '@naturacosmeticos/natds-themes/build/android/natura/dark';
import androidNaturaLight from '@naturacosmeticos/natds-themes/build/android/natura/light';
import androidTheBodyShopDark from '@naturacosmeticos/natds-themes/build/android/theBodyShop/dark';
import androidTheBodyShopLight from '@naturacosmeticos/natds-themes/build/android/theBodyShop/light';
import iosAesopDark from '@naturacosmeticos/natds-themes/build/ios/AesopDark';
import iosAesopLight from '@naturacosmeticos/natds-themes/build/ios/AesopLight';
import iosAvonDark from '@naturacosmeticos/natds-themes/build/ios/AvonDark';
import iosAvonLight from '@naturacosmeticos/natds-themes/build/ios/AvonLight';
import iosNaturaDark from '@naturacosmeticos/natds-themes/build/ios/NaturaDark';
import iosNaturaLight from '@naturacosmeticos/natds-themes/build/ios/NaturaLight';
import iosTheBodyShopDark from '@naturacosmeticos/natds-themes/build/ios/TheBodyShopDark';
import iosTheBodyShopLight from '@naturacosmeticos/natds-themes/build/ios/TheBodyShopLight';
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
