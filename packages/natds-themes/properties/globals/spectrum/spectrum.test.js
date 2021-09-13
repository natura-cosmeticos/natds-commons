import spectrum from './spectrum';

jest.mock('open-color/open-color.json', () => ({
  black: '#000000',
  blue: ['#f8f9fa', '#212529'],
  gray: ['#f8f9fa', '#212529'],
  red: ['#f8f9fa', '#212529'],
  white: '#ffffff',
}));

describe('spectrum-light', () => {
  it('should add the dark and light colors', () => {
    expect(spectrum.spectrum.light.value).toEqual('#ffffff');
    expect(spectrum.spectrum.dark.value).toEqual('#000000');
    expect(spectrum.spectrum.black).toBeFalsy();
    expect(spectrum.spectrum.gray).toBeFalsy();
    expect(spectrum.spectrum.red).toBeFalsy();
  });

  it('should create the spectrum from open-color', () => {
    const expectedSpectrum = {
      50: { value: '#f8f9fa' },
      100: { value: '#212529' },
    };

    expect(spectrum.spectrum.blue).toEqual(expectedSpectrum);
  });
});
