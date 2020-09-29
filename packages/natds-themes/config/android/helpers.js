import CryptoJS from 'crypto-js';
import { isProp, isOneOfProps } from '../shared/helpers';

export const createEncodedHashFromValue = (value) => `ssot${CryptoJS.MD5(value.toString())}`;

export const isColor = (item) => isProp(item, 'color');

export const isSpDimension = (prop) => isProp(prop, 'fontSize');

export const isUnitlessDimension = (prop) => isOneOfProps(prop, ['opacity', 'lineHeight', 'letterSpacing']);

export const isDimension = (prop) => !isOneOfProps(prop, ['color', 'fontFamily', 'fontWeight']);

export const isDimensionWithUnit = (prop) => isDimension(prop) && !isUnitlessDimension(prop);

export const mapFilteredValues = (props, filterFn, mapFn) => props.filter(filterFn).map(mapFn);
