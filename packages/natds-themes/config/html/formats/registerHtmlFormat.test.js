/* eslint-disable id-length */
import path from 'path'
import { registerHtmlFormat, registerSpectrumHtmlFormat } from './registerHtmlFormat'

const dictionary = {
  properties: {
    asset: {
      brand: {
        neutral: {
          a: {
            file: {
              attributes: {},
              name: 'assetBrandNeutralAFile',
              original: {
                value: 'logo.svg'
              },
              path: [
                'asset',
                'brand',
                'neutral',
                'a',
                'file'
              ],
              value: 'logo.svg'
            }
          }
        }
      }
    },
    borderRadius: {
      small: {
        attributes: {},
        name: 'borderRadiusSmall',
        original: {
          value: 8
        },
        path: [
          'borderRadius',
          'small'
        ],
        value: 8
      }
    },
    color: {
      primary: {
        attributes: {},
        name: 'colorPrimary',
        original: {
          value: '#F091C9'
        },
        path: [
          'color',
          'primary'
        ],
        value: '#F091C9'
      }
    },
    heading1: {
      fontSize: {
        attributes: {},
        name: 'heading1FontSize',
        original: {
          value: 14
        },
        path: [
          'heading1',
          'fontSize'
        ],
        value: 14
      },
      fontWeight: {
        attributes: {},
        name: 'heading1FontWeight',
        original: {
          value: 500
        },
        path: [
          'heading1',
          'fontWeight'
        ],
        value: 500
      },
      letterSpacing: {
        attributes: {},
        name: 'heading1LetterSpacing',
        original: {
          value: 0
        },
        path: [
          'heading1',
          'letterSpacing'
        ],
        value: 0
      }
    },
    size: {
      tiny: {
        attributes: {},
        name: 'sizeTiny',
        original: {
          value: 8
        },
        path: [
          'size',
          'tiny'
        ],
        value: 8
      }
    },
    spacing: {
      small: {
        attributes: {},
        name: 'spacingSmall',
        original: {
          value: 8
        },
        path: [
          'spacing',
          'small'
        ],
        value: 8
      }
    },
    typography: {
      body: {
        bold: {
          fontFamily: {
            name: 'typographyBodyBoldFontFamily',
            value: 'font C'
          },
          fontWeight: {
            name: 'typographyBodyBoldFontWeight',
            value: 400
          }
        },
        regular: {
          fontFamily: {
            name: 'typographyBodyRegularFontFamily',
            value: 'font C'
          },
          fontWeight: {
            name: 'typographyBodyRegularFontWeight',
            value: 400
          }
        }
      },
      display: {
        fontFamily: {
          name: 'typographyDisplayFontFamily',
          value: 'font A'
        },
        fontWeight: {
          name: 'typographyDisplayFontWeight',
          value: 400
        }
      },
      fontFamily: {
        small: {
          attributes: {},
          name: 'typographyFontFamilySmall',
          original: {
            value: 14
          },
          path: [
            'typography',
            'fontFamily',
            'small'
          ],
          value: 14
        }
      },
      headline: {
        fontFamily: {
          name: 'typographyHeadlineFontFamily',
          value: 'font B'
        },
        fontWeight: {
          name: 'typographyHeadlineFontWeight',
          value: 400
        }
      },
      lineHeight: {
        small: {
          attributes: {},
          name: 'typographyLineHeightSmall',
          original: {
            value: 1
          },
          path: [
            'typography',
            'lineHeight',
            'small'
          ],
          value: 1
        }
      }
    }
  }
}

const spectrum = {
  properties: {
    spectrum: {
      angle: {
        attributes: { customOptions: { type: 'color' } },
        name: 'gradientStart',
        original: {
          value: 100
        },
        path: [
          'spectrum',
          'gradient',
          'angle'
        ],
        value: 100
      },
      end: {
        attributes: { customOptions: { type: 'color' } },
        name: 'gradientStart',
        original: {
          value: '#F091C9'
        },
        path: [
          'spectrum',
          'gradient',
          'end'
        ],
        value: '#F091C9'
      },
      primary: {
        attributes: { customOptions: { type: 'color' } },
        name: 'spectrumPrimary',
        original: {
          value: '#F091C9'
        },
        path: [
          'spectrum',
          'primary'
        ],
        value: '#F091C9'
      },
      start: {
        attributes: { customOptions: { type: 'color' } },
        name: 'gradientStart',
        original: {
          value: '#F091C9'
        },
        path: [
          'spectrum',
          'gradient',
          'start'
        ],
        value: '#F091C9'
      },
      type: {
        attributes: { customOptions: { type: 'color' } },
        name: 'gradientStart',
        original: {
          value: 'linear'
        },
        path: [
          'spectrum',
          'gradient',
          'type'
        ],
        value: 'linear'
      }
    }
  }
}

describe('registerHtmlFormat', () => {
  it('should return the correct formatter template', () => {
    const register = registerHtmlFormat()

    const output = register.formatter(dictionary, { brand: 'avon' })

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerHtmlFormat.snap.html'))
  })
})

describe('registerSpectrumHtmlFormat', () => {
  it('should return the correct formatter template', () => {
    const register = registerSpectrumHtmlFormat()

    const output = register.formatter(spectrum)

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerSpectrumHtmlFormat.snap.html'))
  })
})
