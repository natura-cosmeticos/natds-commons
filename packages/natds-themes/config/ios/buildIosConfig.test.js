/* eslint-disable max-lines */

import buildIosConfig from './buildIosConfig';
import * as filterCategory from '../shared/filters';

const expectedConfig = {
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'PokemonColorPalettePikachu.swift',
      filter: expect.any(Function),
      format: 'ios-swift/struct.swift',
      interfaceName: 'ColorPalette',
      propertyName: 'color',
      structName: 'PokemonColorPalettePikachu',
    },
    {
      destination: 'ColorPalette.swift',
      filter: expect.any(Function),
      format: 'ios-swift/protocol.swift',
      propertyName: 'color',
      protocolName: 'ColorPalette',
      protocolType: 'String',
    },
    {
      destination: 'DynamicColors.swift',
      filter: expect.any(Function),
      format: 'ios-swift/dynamic-colors.swift',
    },
    {
      destination: 'PokemonSizes.swift',
      filter: expect.any(Function),
      format: 'ios-swift/struct.swift',
      interfaceName: 'Sizes',
      propertyName: 'size',
      structName: 'PokemonSizes',
      type: ': CGFloat',
    },
    {
      destination: 'Sizes.swift',
      filter: expect.any(Function),
      format: 'ios-swift/protocol.swift',
      propertyName: 'size',
      protocolName: 'Sizes',
      protocolType: 'CGFloat',
    },
    {
      destination: 'PokemonSpacings.swift',
      filter: expect.any(Function),
      format: 'ios-swift/struct.swift',
      interfaceName: 'Spacings',
      propertyName: 'spacing',
      structName: 'PokemonSpacings',
      type: ': CGFloat',
    },
    {
      destination: 'Spacings.swift',
      filter: expect.any(Function),
      format: 'ios-swift/protocol.swift',
      propertyName: 'spacing',
      protocolName: 'Spacing',
      protocolType: 'CGFloat',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti'],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toMatchObject(expectedConfig);
  });

  it('should filter de color category on color struct file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[0].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'color');
  });

  it('should filter de color category on color protocol file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[1].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'color');
  });

  it('should filter de color category on dynamic colors file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[2].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'color');
  });

  it('should filter de size category on size struct file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[3].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'size');
  });

  it('should filter de size category on size protocol file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[4].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'size');
  });

  it('should filter de spacing category on spacing struct file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[5].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'spacing');
  });

  it('should filter de spacing category on size spacing file', () => {
    const filterCategorySpy = jest.fn();

    jest
      .spyOn(filterCategory, 'filterCategory')
      .mockImplementation(filterCategorySpy);

    const config = buildIosConfig('pokemon', 'pikachu');

    config.files[6].filter({});

    expect(filterCategorySpy).toHaveBeenCalledWith({}, 'spacing');
  });
});
