/* eslint-disable no-use-before-define */
import CryptoJS from 'crypto-js';
import { pipe, prop } from 'ramda';
import { isProp, isOneOfProps, isPrivateProp } from '../shared/helpers';
import { toSnakeCase } from '../shared/textHelpers';

export const createEncodedHashFromValue = (value) => `ssot${CryptoJS.MD5(value.toString())}`;

export const isColor = isProp('color');

export const isSpDimension = isProp('fontSize');

export const isUnitlessDimension = isOneOfProps(['opacity', 'lineHeight', 'letterSpacing']);

export const isDimension = (property) => !isOneOfProps(['color', 'spectrum', 'fontFamily', 'fontWeight', 'asset'])(property) && !isPrivateProp(property);

export const isDimensionWithUnit = (property) => (
  isDimension(property) && !isUnitlessDimension(property)
);

export const mapFilteredValues = (props, filterFn, mapFn) => props.filter(filterFn).map(mapFn);

export const propValueToSnakeCase = pipe(prop('value'), toSnakeCase);
