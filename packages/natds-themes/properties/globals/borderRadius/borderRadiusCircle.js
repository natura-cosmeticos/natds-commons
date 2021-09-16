import { mapObjIndexed } from 'ramda';
import size from '../size/size.json';

const circle = mapObjIndexed((item) => ({ value: item.value / 2 }))(size.size);

module.exports = { private: { borderRadius: { circle } } };
