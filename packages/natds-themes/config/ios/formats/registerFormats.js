import path from 'path';
import { flatTokensAndComponents, flattenProps, formatBuilder } from '../../shared/helpers';

const themeStructDataBuilder = (
  dictionary, platform, { themeName },
) => {
  const { tokens, components } = flatTokensAndComponents(dictionary);

  const prepend = `
struct ${themeName}Theme: Theme {
  let tokens: Tokens = ${themeName}Tokens()
  let components: Components = ${themeName}Components()
}
`;

  return {
    data: [
      {
        structItems: tokens,
        structName: `${themeName}Tokens`,
        structType: 'Tokens',
      },
      {
        structItems: components,
        structName: `${themeName}Components`,
        structType: 'Components',
      },
    ],
    prepend,
  };
};

const spectrumStructDataBuilder = (
  { properties }, platform, { themeName },
) => ({
  data: [{
    structItems: flattenProps(properties),
    structName: `${themeName}Spectrum`,
    structType: 'Spectrum',
  }],
  themeName,
});

const themeProtocolDataBuilder = (dictionary) => {
  const { tokens, components } = flatTokensAndComponents(dictionary);

  const prepend = `
protocol Theme {
  var tokens: Tokens
  var components: Components
}
`;

  return {
    data: [
      {
        protocolItems: tokens,
        protocolName: 'Tokens',
      },
      {
        protocolItems: components,
        protocolName: 'Components',
      },
    ],
    prepend,
  };
};

const spectrumProtocolDataBuilder = ({ properties }) => ({
  data: [
    {
      protocolItems: flattenProps(properties),
      protocolName: 'Spectrum',
    },
  ],
});

export const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/struct.hbs');

  return formatBuilder('ios-swift/theme.swift', templatePath, themeStructDataBuilder);
};

export const registerThemeProtocolFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/protocol.hbs');

  return formatBuilder('ios-swift/theme-protocol.swift', templatePath, themeProtocolDataBuilder);
};

export const registerSpectrumProtocolFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/protocol.hbs');

  return formatBuilder(
    'ios-swift/spectrum-protocol.swift',
    templatePath,
    spectrumProtocolDataBuilder,
  );
};

export const registerSpectrumFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/struct.hbs');

  return formatBuilder(
    'ios-swift/spectrum.swift',
    templatePath,
    spectrumStructDataBuilder,
  );
};
