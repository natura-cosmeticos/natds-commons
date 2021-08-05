const fs = require('fs');
const path = require('path');
const { assocPath } = require('ramda');

const rawTokens = JSON.parse(fs.readFileSync(path.resolve(__dirname, './colors-to-code-output.json')).toString());

const brands = [
  'the body shop',
  'natura old',
  'avon',
  'aesop',
];

const styleType = 'main';

const buildTokenName = (rawTokenName) => {
  const tokenWords = rawTokenName.split('/').pop().split('-');
  const tokenName = tokenWords.length === 2 ? [...tokenWords, 'main'] : tokenWords;

  return tokenName;
};

export const parseBrandMainColors = () => {
  const output = brands.reduce((acc, brand) => {
    const colorsByBrand = rawTokens.colors.reduce((allTokens, token) => {
      const tokenOriginalName = token.name.toLowerCase();

      if (tokenOriginalName.includes(brand) && tokenOriginalName.includes(styleType)) {
        const tokenName = buildTokenName(token.name);

        return assocPath([brand, ...tokenName, 'value'], token.values.hex, allTokens);
      }

      return { ...allTokens };
    }, {});

    return {
      ...acc,
      ...colorsByBrand,
    };
  }, {});

  fs.writeFileSync('./parsed-tokens.json', JSON.stringify(output));
};

export const parseSpectrumCustomColors = () => {
  const colors = rawTokens.colors.reduce((allTokens, token) => {
    const tokenOriginalName = token.name.toLowerCase();

    if (tokenOriginalName.includes('aesop/spectrum')) {
      const tokenName = token.name.split('/').pop().split('-');

      return assocPath([...tokenName, 'value'], token.values.hex, allTokens);
    }

    return { ...allTokens };
  }, {});

  fs.writeFileSync('./parsed-spectrum-tokens.json', JSON.stringify(colors));
};

parseSpectrumCustomColors();
