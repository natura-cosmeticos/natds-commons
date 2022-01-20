import { capitalizeWord, arrayToCamelCase, camelToSnakeCase } from './textHelpers'

describe('textHelpers', () => {
  describe('capitalizeWord', () => {
    it('should return the captalized word', () => {
      const word = capitalizeWord('picachu')

      expect(word).toEqual('Picachu')
    })
  })

  describe('arrayToCamelCase', () => {
    it('should convert the array to a camel case string', () => {
      const array = ['an', 'array', 'of', 'words']

      expect(arrayToCamelCase(array)).toEqual('anArrayOfWords')
    })
  })

  describe('camelToSnakeCase', () => {
    it('should convert the given string to a snake case string', () => {
      const string = 'sampleSmallText'

      expect(camelToSnakeCase(string)).toEqual('sample_small_text')
    })
  })
})
