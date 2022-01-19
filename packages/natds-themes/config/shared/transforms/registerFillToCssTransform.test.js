import { registerFillToCssTransform } from './registerFillToCssTransform'

describe('registerFillToCssTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'asset/svg-fill-to-css',
      transformer: expect.any(Function),
      transitive: false,
      type: 'value'
    }

    const result = registerFillToCssTransform()

    expect(result).toEqual(expectedConfig)
  })

  it('should remove the fill prop from elements and add to a style tag', () => {
    const transform = registerFillToCssTransform()

    const prop = {
      value: '<svg><path fill="#000000"></path><rect fill="#000000"></rect></svg>'
    }

    const expectedSvg = `<svg>
    <style>
      path,rect @@@
        fill: #000000
      !!!
    </style>
    <path ></path><rect ></rect></svg>`

    const result = transform.transformer(prop)

    expect(result).toEqual(expectedSvg)
  })
})
