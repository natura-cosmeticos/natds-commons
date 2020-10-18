import {
  join,
  pipe,
  split,
  map,
} from 'ramda';

export const buildIconNamesFromGlyphData = (glyphsData, transformCode) => glyphsData
  .reduce((prev, { metadata: { name, unicode } }) => ({
    ...prev,
    [name]: transformCode(unicode),
  }), {});

const capitalizeWord = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const toCamelCase = pipe(
  split('-'),
  map((item, index) => (index === 0 ? item : capitalizeWord(item))),
  join(''),
);
