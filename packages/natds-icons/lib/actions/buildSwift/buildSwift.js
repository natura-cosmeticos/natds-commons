import path from 'path';
import { assocPath } from 'ramda';
import { getIconString, getUnicodeIconString } from './helpers';

const buildSwiftContentFromJson = (data) => `
public enum Icon: String, CaseIterable {
  ${getIconString(data)}
}

extension Icon {
  var unicode: String {
    switch self {
    ${getUnicodeIconString(data)}
    }
  }
}
`;

export const buildSwift = (data) => {
  const { globalConfig: { fontName, outputPath } } = data;

  const swiftOutput = {
    content: buildSwiftContentFromJson(data),
    outputPath: path.resolve(outputPath, `${fontName}.swift`),
  };

  return assocPath(['outputs', 'swift'], swiftOutput, data);
};

export default buildSwift;
