import { replace } from 'ramda';

export const capitalizeWord = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const arrayToCamelCase = ([firstWord, ...words]) => `${firstWord}${words.map(capitalizeWord).join('')}`;

export const toSnakeCase = replace(/-/g, '_');

export default {
  arrayToCamelCase,
  capitalizeWord,
  toSnakeCase,
};
