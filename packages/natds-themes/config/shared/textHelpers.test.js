import { capitalizeWord } from './textHelpers';

describe('textHelpers', () => {
  describe('capitalizeWord', () => {
    it('should return the captalized word', () => {
      const word = capitalizeWord('picachu');

      expect(word).toEqual('Picachu');
    });
  });
});
