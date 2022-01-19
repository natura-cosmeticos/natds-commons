import {
  addIndex,
  join,
  map,
  pipe,
  split
} from 'ramda'

export const buildIconNamesFromGlyphData = (glyphsData, transformCode) => glyphsData
  .reduce((prev, { metadata: { name, unicode } }) => ({
    ...prev,
    [name]: transformCode(unicode)
  }), {})

const capitalizeWord = (word) => `${word[0].toUpperCase()}${word.slice(1)}`

const mapIndexed = addIndex(map)

export const toCamelCase = pipe(
  split('-'),
  mapIndexed((item, index) => (index === 0 ? item : capitalizeWord(item))),
  join('')
)
