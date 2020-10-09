import iconNameMapper from './iconNameMapper';

describe('Icon name mapper', () => {
  it('should create swift enum from icon name', () => {
    const actual = iconNameMapper('iconName');

    expect(actual).toBe('case iconName = "iconName"\n');
  });
});
