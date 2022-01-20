import path from 'path'
import { registerTokenSearchFormat } from './registerTokenSearchFormat'

const dictionary = {
  properties: {
    color: {
      primary: {
        attributes: { customOptions: { type: 'color' } },
        name: 'colorPrimary',
        original: { value: '#F091C9' },
        path: ['color', 'primary'],
        value: '#F091C9'
      }
    },
    size: {
      tiny: {
        attributes: { customOptions: { type: 'dimension' } },
        name: 'sizeTiny',
        original: { value: 8 },
        path: ['size', 'tiny'],
        value: 8
      }
    },
    typography: {
      fontFamily: {
        primary: {
          attributes: { customOptions: { type: 'fontFamily' } },
          deprecated: true,
          deprecated_comment: 'replace with Headline, Display or Body',
          name: 'typographyFontFamilyPrimary',
          original: {
            deprecated: true,
            deprecated_comment: 'replace with Headline, Display or Body',
            value: '{platform.typography.fontFamily.primary.value}'
          },
          path: ['typography', 'fontFamily', 'primary'],
          value: 'Roboto'
        }
      }
    }
  }
}

describe('registerTokenSearchFormat', () => {
  it('should return the correct formatter template for tokens search', () => {
    const register = registerTokenSearchFormat()
    const output = register.formatter(dictionary)

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerTokenSearchFormat.snap.json'))
  })
})
