import { registerFontWeightTransform } from './registerFontWeightTransform'

describe('registerFontWeightTransform', () => {
  it('should return the transformer config', () => {
    const config = registerFontWeightTransform()

    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'value/font-weight-android',
      transformer: expect.any(Function),
      type: 'value'
    }

    expect(config).toMatchObject(expectedConfig)
  })

  it('should return the correct font weight', () => {
    const config = registerFontWeightTransform()

    const result = config.transformer({
      path: ['fontWeight'],
      value: 400
    })

    expect(result).toEqual('sans-serif')
  })
})
