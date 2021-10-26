import fs from 'fs';
import { registerCreateResourcesAction, dataBuilder } from './registerCreateResourcesAction';
import * as sharedHelpers from '../../shared/helpers';
import * as helpers from '../helpers/helpers';

jest.mock('fs');
jest.mock('../../shared/helpers');

describe('registerCreateResourcesAction', () => {
  it('should return create resources action', () => {
    const createPathsAction = registerCreateResourcesAction();

    expect(typeof createPathsAction.do).toBe('function');
    expect(typeof createPathsAction.undo).toBe('function');
    expect(createPathsAction.name).toEqual('create_resources');
  });

  describe('extractValuesForResourceOutput', () => {
    it('should call createOutputPathInfo with colors and dimensions', () => {
      const createOutputPathInfoSpy = jest.spyOn(sharedHelpers, 'createOutputPathInfo');

      const createPathsAction = registerCreateResourcesAction();

      createPathsAction.do({}, {});

      expect(createOutputPathInfoSpy).toHaveBeenNthCalledWith(1, 'build/android/theme/colors.json', expect.any(Function), {}, {});
      expect(createOutputPathInfoSpy).toHaveBeenNthCalledWith(2, 'build/android/theme/dimens.json', expect.any(Function), {}, {});
    });
  });

  describe('deleteResourceFile', () => {
    it('should delete the resource files', () => {
      const createPathsAction = registerCreateResourcesAction();

      createPathsAction.undo();

      expect(fs.unlinkSync).toHaveBeenNthCalledWith(1, 'build/android/theme/colors.json');
      expect(fs.unlinkSync).toHaveBeenNthCalledWith(2, 'build/android/theme/dimens.json');
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
