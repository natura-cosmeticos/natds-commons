import path from 'path'
import {
  registerThemeFormat,
  registerThemeProtocolFormat,
  registerSpectrumFormat,
  registerSpectrumProtocolFormat
} from './registerFormats'
import '../../shared/config'

const dictionary = {
  properties: {
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
        deprecated: true,
        deprecated_comment: 'replace with another color',
        name: 'colorPrimary',
        original: {
          value: '"#F091C9"'
        },
        path: [
          'color',
          'primary'
        ],
        value: '"#F091C9"'
      }
    },
    elevation: {
      tiny: {
        attributes: {},
        name: 'elevationTiny',
        original: {
          value: 1
        },
        path: [
          'elevation',
          'tiny'
        ],
        value: 1
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
      }
    },
    opacity: {
      opaque: {
        attributes: {},
        name: 'opacityOpaque',
        original: {
          value: 1
        },
        path: [
          'opacity',
          'opaque'
        ],
        value: 1
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
      lineHeight: {
        small: {
          attributes: {},
          name: 'typographyLineHeightSmall',
          original: {
            value: 14
          },
          path: [
            'typography',
            'lineHeight',
            'small'
          ],
          value: 14
        }
      }
    }
  }
}

const spectrum = {
  properties: {
    spectrum: {
      primary: {
        attributes: { customOptions: { type: 'color' } },
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
    }
  }
}

describe('registerFormats', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('registerThemeFormat', () => {
    it('should return the correct formatter template', () => {
      const register = registerThemeFormat()

      register.themeName = 'NaturaLight'

      const output = register.formatter(dictionary)

      expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerThemeFormat.snap.html'))
    })
  })

  describe('registerThemeProtocolFormat', () => {
    it('should return the correct formatter template', () => {
      const register = registerThemeProtocolFormat()

      const output = register.formatter(dictionary)

      expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerThemeProtocolFormat.snap.html'))
    })
  })

  describe('registerSpectrumFormat', () => {
    it('should return the correct formatter template', () => {
      const register = registerSpectrumFormat()

      register.themeName = 'NaturaLight'

      const output = register.formatter(spectrum)

      expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerSpectrumFormat.snap.html'))
    })
  })

  describe('registerSpectrumProtocolFormat', () => {
    it('should return the correct formatter template', () => {
      const register = registerSpectrumProtocolFormat()

      const output = register.formatter(spectrum)

      expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerSpectrumProtocolFormat.snap.html'))
    })
  })
})
