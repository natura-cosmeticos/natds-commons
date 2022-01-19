import { getMetadataProvider } from './metadataBuilder'

const startUnicode = 0xea01

const data = {
  previousIconCodes: {
    'icon-a': [String.fromCodePoint(startUnicode)],
    'icon-d': [String.fromCodePoint(startUnicode + 1)],
    'icon-g': [String.fromCodePoint(startUnicode + 2)]
  }
}

describe('metadataBuilder', () => {
  describe('when there are previous icon codes', () => {
    it('should return current icon code if exists', () => {
      const metadataBuilder = getMetadataProvider(data)
      const cb = jest.fn()

      metadataBuilder('./path/to/icon-a.svg', cb)

      const expectedMetadata = {
        name: 'icon-a',
        path: './path/to/icon-a.svg',
        renamed: false,
        unicode: data.previousIconCodes['icon-a']
      }

      expect(cb).toHaveBeenCalledWith(null, expectedMetadata)
    })

    it('should return a unused icon code if is a new icon', () => {
      const metadataBuilder = getMetadataProvider(data)
      const cb = jest.fn()

      metadataBuilder('./path/to/icon-b.svg', cb)

      const expectedMetadata = {
        name: 'icon-b',
        path: './path/to/icon-b.svg',
        renamed: false,
        unicode: [String.fromCodePoint(startUnicode + 3)]
      }

      expect(cb).toHaveBeenCalledWith(null, expectedMetadata)
    })
  })

  describe('when there are not previous icon codes', () => {
    it('should create icon codes sequentially', () => {
      const cb = jest.fn()
      const metadataBuilder = getMetadataProvider({ previousIconCodes: {} })

      metadataBuilder('./path/to/icon-a.svg', cb)
      metadataBuilder('./path/to/icon-b.svg', cb)

      const expectedMetadataA = {
        name: 'icon-a',
        path: './path/to/icon-a.svg',
        renamed: false,
        unicode: [String.fromCodePoint(startUnicode)]
      }

      const expectedMetadataB = {
        name: 'icon-b',
        path: './path/to/icon-b.svg',
        renamed: false,
        unicode: [String.fromCodePoint(startUnicode + 1)]
      }

      expect(cb).toHaveBeenNthCalledWith(1, null, expectedMetadataA)
      expect(cb).toHaveBeenNthCalledWith(2, null, expectedMetadataB)
    })
  })
})
