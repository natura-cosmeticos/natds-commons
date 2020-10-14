import { buildSwift } from './buildSwift';
import * as helpers from './helpers';

const data = {
  globalConfig: {
    fontName: 'font-name',
  },
};

describe('buildSwift', () => {
  let getIconStringSpy;
  let getUnicodeIconStringSpy;

  beforeEach(() => {
    getIconStringSpy = jest
      .spyOn(helpers, 'getIconString')
      .mockReturnValue('case IconName = "icon-name"');

    getUnicodeIconStringSpy = jest
      .spyOn(helpers, 'getUnicodeIconString')
      .mockReturnValue('case .IconName: return "\\u{EA0A}"');
  });

  it('should call helper functions', () => {
    buildSwift(data);

    expect(getIconStringSpy).toHaveBeenCalledWith(data);
    expect(getUnicodeIconStringSpy).toHaveBeenCalledWith(data);
  });

  it('should return the swift output', () => {
    const result = buildSwift(data);

    const content = `
public enum Icon: String, CaseIterable {
  case IconName = "icon-name"
}

extension Icon {
  var unicode: String {
    switch self {
    case .IconName: return "\\u{EA0A}"
    }
  }
}
`;

    const expectedSwiftOutput = {
      swift: {
        content,
        outputPath: '../../build/font-name.swift',
      },
    };

    expect(result).toEqual({
      ...data,
      outputs: {
        ...expectedSwiftOutput,
      },
    });
  });
});
