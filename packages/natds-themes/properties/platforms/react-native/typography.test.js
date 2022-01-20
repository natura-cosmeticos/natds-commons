import webTypographies from '../web/typography.json'
import cssTypography from './typography'

describe('Css Typography', () => {
  it('should return web typographies', () => {
    expect(cssTypography).toEqual(webTypographies)
  })
})
