import DtsCreator from 'typed-css-modules';

export const buildCssDts = (data) => {
  const { globalConfig: { fontName, outputPath }, outputs: { css } } = data;
  const filePath = `${outputPath}/${fontName}.css`;

  const creator = new DtsCreator();

  return creator
    .create(filePath, css.content)
    .then((content) => {
      content.writeFile();

      return data;
    });
};

export default buildCssDts;
