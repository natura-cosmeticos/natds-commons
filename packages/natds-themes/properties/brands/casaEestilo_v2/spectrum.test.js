import spectrum from './spectrum'

jest.mock('open-color/open-color.json', () => ({
  gray: ['#f8f9fa', '#212529'],
  red: ['#fafafa', '#777aaa']
}))

describe('spectrum', () => {
  it('should return the gray and red colors from open-color', () => {
    expect(spectrum.spectrum.gray[50].value).toEqual('#f8f9fa')
    expect(spectrum.spectrum.red[50].value).toEqual('#fafafa')
  })
})
