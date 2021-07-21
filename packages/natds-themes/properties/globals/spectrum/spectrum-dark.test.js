import spectrum from './spectrum-dark';

jest.mock('open-color/open-color.json', () => ({
  black: '#000000',
  gray: ['#f8f9fa', '#212529'],
  white: '#ffffff',
}));

describe('spectrum-light', () => {
  it('should add the dark and light colors ', () => {
    expect(spectrum.spectrum.light.value).toEqual('#000000');
    expect(spectrum.spectrum.dark.value).toEqual('#ffffff');
    expect(spectrum.spectrum.black).toBeFalsy();
    expect(spectrum.spectrum.white).toBeFalsy();
  });

  it('should create the spectrum from open-color, inverting colors', () => {
    const expectedSpectrum = {
      0: { value: '#212529' },
      1: { value: '#f8f9fa' },
    };

    expect(spectrum.spectrum.gray).toEqual(expectedSpectrum);
  });
});
