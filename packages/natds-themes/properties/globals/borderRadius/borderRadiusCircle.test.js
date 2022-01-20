import border from './borderRadiusCircle'
import size from '../size/size.json'

describe('borderRadiusCircle', () => {
  it('should return the size scale divided by two', () => {
    const borderCircleScale = border.private.borderRadius.circle

    Object.keys(borderCircleScale).forEach((key) => {
      expect(borderCircleScale[key].value).toEqual(size.size[key].value / 2)
    })
  })
})
