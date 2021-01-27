/* eslint-disable mocha/no-setup-in-describe */
import fs from 'fs';
import path from 'path';

const getAllIcons = () => {
  const svgFolder = path.resolve(__dirname, '../svg');
  const icons = fs
    .readdirSync(svgFolder)
    .filter((file) => file.includes('.svg'))
    .map((name) => ({
      content: fs.readFileSync(path.resolve(svgFolder, name)).toString(),
      name,
    }));

  return icons;
};

describe('icons input', () => {
  const icons = getAllIcons();

  test.each(icons)('should have the correct size %o', (icon) => {
    const matchSize = /viewBox="(\d+\s\d+\s\d+\s\d+)"/;
    const size = icon.content.match(matchSize);

    expect(size[1]).toEqual('0 0 24 24');
  });

  test.each(icons)('should have the correct naming convention %o', (icon) => {
    const words = icon.name.split('-');

    const isAllowedStyleName = words[0] === 'filled' || words[0] === 'outlined';

    expect(words.length).toEqual(3);
    expect(isAllowedStyleName).toBeTruthy();
  });

  test.each(icons)('should not have a fill-rule style %o', (icon) => {
    const hasFillRule = icon.content.includes('fill-rule');

    expect(hasFillRule).toBeFalsy();
  });
});
