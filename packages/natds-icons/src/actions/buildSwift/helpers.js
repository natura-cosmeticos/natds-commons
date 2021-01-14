import {
  join,
  mapObjIndexed,
  pipe,
  path,
  values,
} from 'ramda';
import { toCamelCase } from '../../helpers';

const mapIconsJson = (mapper) => (data) => pipe(
  path(['outputs', 'json', 'content']),
  JSON.parse,
  mapObjIndexed(mapper),
  values,
  join(''),
)(data);

const toIosUnicode = (unicode) => `${unicode.replace('%u', '\\u{')}}`;

const unicodeNameMapper = (iconCode, iconName) => `case .${toCamelCase(iconName)}: return "${toIosUnicode(iconCode)}"\n\t\t`;

const iconNameMapper = (value, iconName) => `case ${toCamelCase(iconName)} = "${iconName}"\n\t`;

export const getUnicodeIconString = mapIconsJson(unicodeNameMapper);

export const getIconString = mapIconsJson(iconNameMapper);
