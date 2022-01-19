/* eslint-disable jest/no-try-expect */
/* eslint-disable jest/no-conditional-expect */
import { buildFonts } from './buildFonts'

const data = {
  globalConfig: {
    fontExtensions: ['ttf'],
    fontName: 'font-name',
    outputPath: 'folder/name'
  },
  ttf: 'ttf file contents'
}

describe('buildFonts', () => {
  it('should throw if there is no font extensions in config', () => {
    try {
      buildFonts()
    } catch (error) {
      expect(error.message).toEqual('ttf data not found')
    }
  })

  it('should throw if the font data is not found', () => {
    try {
      buildFonts({ globalConfig: { fontExtensions: ['ttf'] } })
    } catch (error) {
      expect(error.message).toEqual('ttf data not found')
    }
  })

  it('should build the font output', () => {
    const result = buildFonts(data)

    expect(result).toEqual({
      ...data,
      outputs: {
        ttf: {
          content: 'ttf file contents',
          outputPath: 'folder/name/fonts/font-name.ttf'
        }
      }
    })
  })
})
