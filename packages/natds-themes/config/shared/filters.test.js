import { filterCategory } from './filters';

describe('filters', () => {
  describe('filterCategory', () => {
    it('should return true if the category matches the given name', () => {
      const dictionary = {
        attributes: {
          category: 'pikachu',
        },
      };

      expect(filterCategory(dictionary, 'pikachu')).toEqual(true);
    });
  });

  it('should return false if the category does not match the given name', () => {
    const dictionary = {
      attributes: {
        category: 'pikachu',
      },
    };

    expect(filterCategory(dictionary, 'bulbasaur')).toEqual(false);
  });
});
