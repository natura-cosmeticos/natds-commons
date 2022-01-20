/* eslint-disable jest/no-try-expect */
/* eslint-disable jest/no-conditional-expect */
import { buildCurrentIconCodes } from './buildCurrentIconCodes'

const iconCode = [String.fromCodePoint(0xea01)]

const data = {
  globalConfig: {
    fontName: 'font-name',
    iconCodesPath: 'folder/name/font-name-codes.json'
  },
  glyphsData: [
    {
      metadata: {
        name: 'icon-name',
        unicode: iconCode
      }
    }
  ]
}

describe('buildCurrentIconCodes', () => {
  it('should throw if there is no glyphsData', () => {
    try {
      buildCurrentIconCodes()
    } catch (error) {
      expect(error.message).toEqual('glyphsData not found')
    }
  })

  it('should build the current icon codes object', () => {
    const expectedJsonContent = {
      'icon-name': iconCode
    }

    const result = buildCurrentIconCodes(data)

    expect(result).toEqual({
      ...data,
      outputs: {
        iconCodes: {
          content: `${JSON.stringify(expectedJsonContent, null, '\t')}\n`,
          outputPath: 'folder/name/font-name-codes.json'
        }
      }
    })
  })
})
