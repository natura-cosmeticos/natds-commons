import webLetterSpacings from '../web/letterSpacing.json';
import cssLetterSpacing from './letterSpacing';

describe('Css LetterSpacing', () => {
  it('should return web letterSpacings', () => {
    expect(cssLetterSpacing).toEqual(webLetterSpacings);
  });
});
