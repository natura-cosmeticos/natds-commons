import { registerAssetSnakeTransform } from './registerAssetSnakeTransform'

const assetFileProp = {
  attributes: { category: 'asset' },
  name: 'assetBrandAFile',
  original: {
    value: 'brand-name-original.svg'
  },
  path: [
    'asset',
    'brand',
    'a',
    'file'
  ],
  value: 'brand-name-original.svg'
}

describe('registerAssetSnakeTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'asset/snake',
      transformer: expect.any(Function),
      type: 'value'
    }

    expect(registerAssetSnakeTransform()).toMatchObject(expectedConfig)
  })

  it('should change the value of asset file names to snake case', () => {
    const transformConfig = registerAssetSnakeTransform()

    expect(transformConfig.transformer(assetFileProp)).toEqual('brand_name_original.svg')
  })
})
