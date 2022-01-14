import android from '../android';
import html from '../html';
import ios from '../ios';
import reactNative from '../react-native';
import css from '../css';
import web from '../web';
import shared from '.';
import { registerTemplateHeaderHelper } from './helpers/templateHelpers';

export const customFormats = [
  ...android.formats,
  ...ios.formats,
  ...reactNative.formats,
  ...web.formats,
  ...css.formats,
  ...html.formats,
  ...shared.formats,
];

export const customActions = [
  ...android.actions,
  ...ios.actions,
  ...reactNative.actions,
  ...web.actions,
  ...css.actions,
  ...html.actions,
  ...shared.actions,
];

export const customTransforms = [
  ...android.transforms,
  ...ios.transforms,
  ...reactNative.transforms,
  ...web.transforms,
  ...css.transforms,
  ...html.transforms,
  ...shared.transforms,
];

export const customFilters = [
  ...shared.filters,
];

registerTemplateHeaderHelper();
