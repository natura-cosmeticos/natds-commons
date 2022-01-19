import { registerCamelTransform } from './registerCamelTransform'
import * as arrayToCamelCase from '../helpers'

jest.mock('../helpers')

describe('registerCamelTransform', () => {
  it('should return the transform config', () => {
    const config = registerCamelTransform()

    const expectedConfig = {
      name: 'name/cti/camel-custom',
      transformer: expect.any(Function),
      type: 'name'
    }

    expect(config).toMatchObject(expectedConfig)
  })

  it('should transform the name to camel case with prefix option', () => {
    const arrayToCamelCaseSpy = jest.fn()

    jest
      .spyOn(arrayToCamelCase, 'arrayToCamelCase')
      .mockImplementation(arrayToCamelCaseSpy)

    const config = registerCamelTransform()

    const prop = {
      path: ['pokemon', 'pikachu']
    }

    config.transformer(prop, { prefix: 'prefix' })

    expect(arrayToCamelCaseSpy).toBeCalledWith(['prefix', 'pokemon', 'pikachu'])
  })

  it('should transform the name to camel case without prefix option', () => {
    const arrayToCamelCaseSpy = jest.fn()

    jest
      .spyOn(arrayToCamelCase, 'arrayToCamelCase')
      .mockImplementation(arrayToCamelCaseSpy)

    const config = registerCamelTransform()

    const prop = {
      path: ['pokemon', 'pikachu']
    }

    config.transformer(prop, {})

    expect(arrayToCamelCaseSpy).toBeCalledWith(['pokemon', 'pikachu'])
  })
})
