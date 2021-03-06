import spectrum from './spectrum-light';

jest.mock('open-color/open-color.json', () => ({
  black: '#000000',
  gray: ['#f8f9fa', '#212529'],
  white: '#ffffff',
}));

describe('spectrum-light', () => {
  it('should add the dark and light colors', () => {
    expect(spectrum.spectrum.light.value).toEqual('#ffffff');
    expect(spectrum.spectrum.dark.value).toEqual('#000000');
    expect(spectrum.spectrum.black).toBeFalsy();
    expect(spectrum.spectrum.white).toBeFalsy();
  });

  it('should create the spectrum from open-color', () => {
    const expectedSpectrum = {
      0: { value: '#f8f9fa' },
      1: { value: '#212529' },
    };

    expect(spectrum.spectrum.gray).toEqual(expectedSpectrum);
  });
});
