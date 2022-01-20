import webElevations from '../web/elevation.json'
import htmlElevations from './elevation'

describe('Html Elevation', () => {
  it('should return web elevations', () => {
    expect(htmlElevations).toEqual(webElevations)
  })
})
