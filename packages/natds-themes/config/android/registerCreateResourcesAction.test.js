import fs from 'fs';
import { registerCreateResourcesAction, dataBuilder } from './registerCreateResourcesAction';
import * as createOutputPathInfo from '../shared/createOutputPathInfo';
import * as helpers from './helpers';

jest.mock('fs');

describe('registerCreateResourcesAction', () => {
  it('should return create resources action', () => {
    const createPathsAction = registerCreateResourcesAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_resources');
  });

  describe('extractValuesForResourceOutput', () => {
    it('should call createOutputPathInfo with colors and dimensions', () => {
      jest.spyOn(helpers, 'isDimension').mockReturnValue(true);
      jest.spyOn(helpers, 'isColor').mockReturnValue(true);
      jest.spyOn(helpers, 'mapFilteredValues').mockReturnValue(['item']);

      const createOutputPathInfoSpy = jest.spyOn(createOutputPathInfo, 'createOutputPathInfo');

      const createPathsAction = registerCreateResourcesAction();

      createPathsAction.do({}, {});

      expect(createOutputPathInfoSpy).toHaveBeenNthCalledWith(1, 'build/android/colors.json', expect.any(Function), {}, {});
      expect(createOutputPathInfoSpy).toHaveBeenNthCalledWith(2, 'build/android/dimensions.json', expect.any(Function), {}, {});
    });
  });

  describe('deleteResourceFile', () => {
    it('should delete the resource files', () => {
      const createPathsAction = registerCreateResourcesAction();

      createPathsAction.undo();

      expect(fs.unlinkSync).toHaveBeenNthCalledWith(1, 'build/android/colors.json');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(2, 'build/android/dimensions.json');
    });
  });

  describe('dataBuilder', () => {
    it('should create an array of values', () => {
      const mapFilteredValuesSpy = jest.spyOn(helpers, 'mapFilteredValues').mockReturnValue(['an item']);

      const mockFilterFn = jest.fn();
      const dictionary = {
        allProperties: [
          { value: 'an item' },
          { value: 2 },
          { value: 'another item' },
        ],
      };

      dataBuilder(mockFilterFn)(dictionary);

      expect(mapFilteredValuesSpy)
        .toHaveBeenCalledWith(dictionary.allProperties, mockFilterFn, expect.any(Function));
    });
  });
});
