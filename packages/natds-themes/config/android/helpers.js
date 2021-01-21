/* eslint-disable no-use-before-define */
import CryptoJS from 'crypto-js';
import { isProp, isOneOfProps, isPrivateProp } from '../shared/helpers';

export const createEncodedHashFromValue = (value) => `ssot${CryptoJS.MD5(value.toString())}`;

export const isColor = (item) => isProp(item, 'color');

export const isSpDimension = (prop) => isProp(prop, 'fontSize');

export const isUnitlessDimension = (prop) => isOneOfProps(prop, ['opacity', 'lineHeight', 'letterSpacing']);

export const isDimension = (prop) => !isOneOfProps(prop, ['color', 'fontFamily', 'fontWeight']) && !isPrivateProp(prop);

export const isDimensionWithUnit = (prop) => (
  helpers.isDimension(prop) && !helpers.isUnitlessDimension(prop)
);

export const mapFilteredValues = (props, filterFn, mapFn) => props.filter(filterFn).map(mapFn);

const helpers = {
  createEncodedHashFromValue,
  isColor,
  isDimension,
  isDimensionWithUnit,
  isSpDimension,
  isUnitlessDimension,
  mapFilteredValues,
};

export default helpers;
