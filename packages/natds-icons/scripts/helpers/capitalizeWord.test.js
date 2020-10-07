import capitalizeWord from './capitalizeWord';

describe('Word capitalization helper', () => {
  it('capitalizes one word correctly', () => {
    const actual = capitalizeWord('word');

    expect(actual).toBe('Word');
  });
});
