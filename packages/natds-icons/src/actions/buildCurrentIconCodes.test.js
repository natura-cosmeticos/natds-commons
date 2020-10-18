import { buildCurrentIconCodes, buildJson } from './buildCurrentIconCodes';

const iconCode = [String.fromCodePoint(0xea01)]

const data = {
  glyphsData: [
    {
      metadata: {
        name: 'icon-name',
        unicode: iconCode,
      },
    },
  ],
  globalConfig: {
    fontName: 'font-name',
  },
}

describe('buildCurrentIconCodes', () => {
  it('should throw if there is no glyphsData', () => {
    try {
      buildCurrentIconCodes()
    } catch (error) {
      expect(error.message).toEqual('glyphsData not found')
    }
  });

  it('should build the current icon codes object', () => {
    const expectedJsonContent = {
      'icon-name': iconCode
    };

    const result = buildCurrentIconCodes(data);

    expect(result).toEqual({
      ...data,
      outputs: {
        iconCodes: {
          outputPath: '../../build/font-name-codes.json',
          content: `${JSON.stringify(expectedJsonContent, null, '\t')}\n`,
        },
      }
    })
  });
});

describe('buildJson', () => {
  it('should throw if there is no glyphsData', () => {
    try {
      buildJson()
    } catch (error) {
      expect(error.message).toEqual('glyphsData not found')
    }
  });

  it('should build the current icon codes object, escaping the code', () => {
    const expectedJsonContent = {
      'icon-name': escape(iconCode)
    };

    const result = buildJson(data);

    expect(result).toEqual({
      ...data,
      outputs: {
        json: {
          outputPath: '../../build/font-name.json',
          content: `${JSON.stringify(expectedJsonContent, null, '\t')}\n`,
        },
      }
    })
  });
});
