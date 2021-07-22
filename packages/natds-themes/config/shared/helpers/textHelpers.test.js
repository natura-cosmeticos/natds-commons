import { capitalizeWord, arrayToCamelCase } from './textHelpers';

describe('textHelpers', () => {
  describe('capitalizeWord', () => {
    it('should return the captalized word', () => {
      const word = capitalizeWord('picachu');

      expect(word).toEqual('Picachu');
    });
  });

  describe('arrayToCamelCase', () => {
    it('should convert the array to a camel case string', () => {
      const array = ['an', 'array', 'of', 'words'];

      expect(arrayToCamelCase(array)).toEqual('anArrayOfWords');
    });
  });
});
