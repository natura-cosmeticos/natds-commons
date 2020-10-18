import { buildCss } from './buildCss';

const data = {
  globalConfig: {
    fontName: 'font-name',
    outputPath: 'folder/name',
  },
  template: '.icon { color: red; }',
};

describe('buildCss', () => {
  it('should crate the css output', () => {
    const result = buildCss(data);

    expect(result).toEqual({
      ...data,
      outputs: {
        css: {
          content: '.icon { color: red; }',
          outputPath: 'folder/name/font-name.css',
        },
      },
    });
  });
});
