import { registerValueStringLiteralTransform } from './registerValueStringLiteralTransform'
import * as helpers from '../../shared/helpers'

jest.mock('../../shared/helpers')

describe('registerValueStringLiteralTransform', () => {
  it('should return the transformer config', () => {
    const config = registerValueStringLiteralTransform()
    const expectedConfig = {
      name: 'value/string-literal',
      transformer: expect.any(Function),
      type: 'value'
    }

    expect(config).toMatchObject(expectedConfig)
  })

  describe('transformer', () => {
    it('should add the commas to string values', () => {
      jest
        .spyOn(helpers, 'isProp')
        .mockReturnValue(() => false)

      const config = registerValueStringLiteralTransform()
      const prop = {
        attributes: { category: 'typography' },
        name: 'typographyFontFamily',
        original: {
          value: 'Arial'
        },
        path: [
          'typography',
          'fontFamily'
        ],
        value: 'Arial'
      }

      const result = config.transformer(prop)

      expect(result).toEqual('"Arial"')
    })

    it('should not add the commas to number values', () => {
      jest
        .spyOn(helpers, 'isProp')
        .mockReturnValue(() => false)

      const config = registerValueStringLiteralTransform()
      const prop = {
        attributes: { category: 'spacing' },
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

      const result = config.transformer(prop)

      expect(result).toEqual(8)
    })

    it('should not add the commas to fontWeight values', () => {
      jest
        .spyOn(helpers, 'isProp')
        .mockReturnValue(() => true)

      const config = registerValueStringLiteralTransform()
      const prop = {
        attributes: { category: 'typography' },
        name: 'typographyFontWeightSmall',
        original: {
          value: 500
        },
        path: [
          'typography',
          'fontWeight',
          'small'
        ],
        value: '.medium'
      }

      const result = config.transformer(prop)

      expect(result).toEqual('.medium')
    })
  })
})
