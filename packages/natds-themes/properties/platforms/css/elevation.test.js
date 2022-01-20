import webElevations from '../web/elevation.json'
import cssElevations from './elevation'

describe('Css Elevation', () => {
  it('should return web elevations', () => {
    expect(cssElevations).toEqual(webElevations)
  })
})
