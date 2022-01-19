import { registerFontFamilyStringTransform } from './registerFontFamilyStringTransform'

describe('registerFontFamilyStringTransform', () => {
  it('should return the transformer config', () => {
    const config = registerFontFamilyStringTransform()

    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'fontFamily/string',
      transformer: expect.any(Function),
      transitive: false,
      type: 'value'
    }

    expect(config).toMatchObject(expectedConfig)
  })

  it('should include double quotes on fontFamily names', () => {
    const config = registerFontFamilyStringTransform()

    const result = config.transformer({ path: ['fontFamily'], value: 'Arial' })

    expect(result).toEqual('"Arial"')
  })
})
