/* eslint-disable jest/no-try-expect */
/* eslint-disable jest/no-conditional-expect */
import { buildCss } from './buildCss'

const data = {
  globalConfig: {
    fontName: 'font-name',
    outputPath: 'folder/name'
  },
  template: '.icon { color: red; }'
}

describe('buildCss', () => {
  it('should throw if there is no template', () => {
    try {
      buildCss()
    } catch (error) {
      expect(error.message).toEqual('template not found')
    }
  })

  it('should create the css output', () => {
    const result = buildCss(data)

    expect(result).toEqual({
      ...data,
      outputs: {
        css: {
          content: '.icon { color: red; }',
          outputPath: 'folder/name/font-name.css'
        }
      }
    })
  })

  it('should replace the font display to swap', () => {
    const templateWithDisplay = {
      ...data,
      template: '@font-face {font-display: auto;}'
    }

    const expectedOutput = {
      ...templateWithDisplay,
      outputs: {
        css: {
          content: '@font-face {font-display: swap;}',
          outputPath: 'folder/name/font-name.css'
        }
      }
    }

    const result = buildCss(templateWithDisplay)

    expect(result).toEqual(expectedOutput)
  })
})
