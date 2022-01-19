import fs from 'fs'
import { registerCreateTypefaceAction } from './registerCreateTypefaceAction'
import * as helpers from '../helpers/helpers'

jest.mock('fs')

const dictionary = {
  properties: {
    asset: {
      font: {
        display: {
          file: {
            attributes: {
              assetOptions: {
                extensions: ['ttf']
              },
              category: 'asset',
              customOptions: {
                type: 'reference'
              },
              item: 'font',
              type: 'display'
            },
            filePath: 'properties/brands/theBodyShop/asset.json',
            isSource: true,
            name: 'assetFontDisplayFile',
            original: {
              value: 'Helvetica'
            },
            path: [
              'asset',
              'font',
              'display',
              'file'
            ],
            value: 'Helvetica'
          }
        },
        headline: {
          file: {
            attributes: {
              assetOptions: {
                extensions: ['ttf']
              },
              category: 'asset',
              customOptions: {
                type: 'reference'
              },
              item: 'font',
              type: 'display'
            },
            filePath: 'properties/brands/theBodyShop/asset.json',
            isSource: true,
            name: 'assetFontHeadlineFile',
            original: {
              value: 'Comic Sans'
            },
            path: [
              'asset',
              'font',
              'headline',
              'file'
            ],
            value: 'Comic Sans'
          }
        }
      }
    },
    borderRadius: {
      none: {
        attributes: {
          category: 'borderRadius',
          customOptions: {
            type: 'dimension'
          },
          type: 'none'
        },
        name: 'borderRadiusNone',
        original: {
          value: 0
        },
        path: [
          'borderRadius',
          'none'
        ],
        value: '0dp'
      }
    }
  }
}

const config = {
  brand: 'avon',
  buildPath: 'build/'
}

describe('registerCreateTypefaceAction', () => {
  it('should return the action config on do', () => {
    const action = registerCreateTypefaceAction()

    const expectedAction = {
      do: expect.any(Function),
      name: 'create_type_face',
      undo: expect.any(Function)
    }

    expect(action).toEqual(expectedAction)
  })

  it('should create the typeface for web', () => {
    const writeFileSpy = jest.fn()

    fs.writeFileSync.mockImplementation(writeFileSpy)

    jest
      .spyOn(helpers, 'readAsset')
      .mockImplementation((fontName) => {
        const font = fontName.split('.')[0]

        return `
@font-face {
  font-family: '${font}';
  src: url('${font}.eot');
}`
      })

    const expectedFontFace = `
@font-face {
  font-family: 'Helvetica';
  src: url('Helvetica.eot');
}

@font-face {
  font-family: 'Comic Sans';
  src: url('Comic Sans.eot');
}`

    const action = registerCreateTypefaceAction()

    action.do(dictionary, config)

    expect(fs.writeFileSync).toHaveBeenCalledWith('build/assets/avon_fonts.css', expectedFontFace)
  })

  it('should remove typeface on undo', () => {
    fs.unlinkSync.mockImplementation(jest.fn())
    const action = registerCreateTypefaceAction()

    action.undo(dictionary, config)

    expect(fs.unlinkSync).toHaveBeenCalledWith('build/assets/avon_fonts.css')
  })
})
