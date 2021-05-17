/* eslint-disable max-nested-callbacks */
import fs from 'fs';
import path from 'path';
import { lensPath, set } from 'ramda';
import childProcess from 'child_process';
import { registerCopyAssetsAction } from './registerCopyAssetsAction';

jest.mock('fs');
jest.mock('path');
jest.mock('child_process');

const dictionaryConfig = {
  buildPath: 'build/web/avon/',
};

const dictionary = {
  properties: {
    asset: {
      brand: {
        horizontal: {
          attributes: {
            assetOptions: {
              extensions: ['svg'],
            },
            category: 'asset',
            customOptions: {
              type: 'dimension',
            },
            item: 'horizontal',
            type: 'brand',
          },
          filePath: 'properties/brands/theBodyShop/asset.json',
          isSource: true,
          name: 'assetBrandHorizontal',
          original: {
            value: 'brand-horizontal',
          },
          path: [
            'asset',
            'brand',
            'horizontal',
          ],
          value: 'brand-horizontal',
        },
        vertical: {
          attributes: {
            assetOptions: {
              extensions: ['svg'],
            },
            category: 'asset',
            customOptions: {
              type: 'dimension',
            },
            item: 'vertical',
            type: 'brand',
          },
          filePath: 'properties/brands/theBodyShop/asset.json',
          isSource: true,
          name: 'assetBrandVertical',
          original: {
            value: 'brand-vertical',
          },
          path: [
            'asset',
            'brand',
            'vertical',
          ],
          value: 'brand-vertical',
        },
      },
    },
    borderRadius: {
      none: {
        attributes: {
          category: 'borderRadius',
          customOptions: {
            type: 'dimension',
          },
          type: 'none',
        },
        name: 'borderRadiusNone',
        original: {
          value: 0,
        },
        path: [
          'borderRadius',
          'none',
        ],
        value: '0dp',
      },
    },
  },
};

const dictionaryWithPng = set(
  lensPath(['properties', 'asset', 'brand', 'horizontal', 'attributes', 'assetOptions', 'extensions']),
  ['png'],
  dictionary,
);

describe('registerCopyAssetsAction', () => {
  beforeEach(() => {
    path.resolve.mockImplementation((item) => item);
    path.dirname.mockImplementation((item) => item);
    fs.existsSync.mockReturnValue(true);
    childProcess.execSync.mockImplementation(jest.fn);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the action config', () => {
    const config = registerCopyAssetsAction();

    expect(config).toEqual({
      do: expect.any(Function),
      name: 'custom_copy_assets',
      undo: expect.any(Function),
    });
  });

  describe('do action', () => {
    it('should create a directory for the assets if it does not exists', () => {
      const config = registerCopyAssetsAction();
      const execSpy = childProcess.execSync.mockImplementation(jest.fn);

      fs.existsSync.mockReturnValue(false);

      config.do(dictionary, dictionaryConfig);
      expect(execSpy).toHaveBeenCalledWith('mkdir build/web/avon/assets');
    });

    it('should log a message if the asset does not exits', () => {
      path.resolve.mockReturnValue('assets/logo');
      const config = registerCopyAssetsAction();
      const logSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(jest.fn);

      fs.existsSync.mockReturnValue(false);

      config.do(dictionary, dictionaryConfig);

      expect(logSpy).toHaveBeenNthCalledWith(1, 'Asset assets/logo/brand-horizontal.svg not found. Check if the file exists in the assets/logo path');
      expect(logSpy).toHaveBeenNthCalledWith(2, 'Asset assets/logo/brand-vertical.svg not found. Check if the file exists in the assets/logo path');
    });

    it('should copy the assets of the dictionary for the given platform', () => {
      path.resolve.mockImplementation((item) => item);

      const config = registerCopyAssetsAction();
      const execSpy = childProcess.execSync.mockImplementation(jest.fn);

      config.do(dictionary, dictionaryConfig);

      expect(execSpy).toHaveBeenNthCalledWith(1, 'cp assets/logo/brand-horizontal.svg build/web/avon/assets/brand-horizontal.svg');
      expect(execSpy).toHaveBeenNthCalledWith(2, 'cp assets/logo/brand-vertical.svg build/web/avon/assets/brand-vertical.svg');
    });

    it('should copy the assets for android changing the file name', () => {
      path.resolve.mockImplementation((item) => item.replace('web', 'android'));
      const config = registerCopyAssetsAction();
      const execSpy = childProcess.execSync.mockImplementation(jest.fn);

      config.do(dictionary, dictionaryConfig);

      expect(execSpy).toHaveBeenNthCalledWith(1, 'cp assets/logo/brand-horizontal.svg build/android/avon/assets/brand_horizontal.svg');
      expect(execSpy).toHaveBeenNthCalledWith(2, 'cp assets/logo/brand-vertical.svg build/android/avon/assets/brand_vertical.svg');
    });

    describe('png assets', () => {
      it('should create a directory when copying assets with multiple densities', () => {
        fs
          .existsSync
          .mockImplementation((item) => item && (!item.includes('build') || (item.includes('build') && !item.includes('x'))));

        const execSpy = childProcess.execSync.mockImplementation(jest.fn);
        const config = registerCopyAssetsAction();

        config.do(dictionaryWithPng, dictionaryConfig);

        expect(execSpy).toHaveBeenNthCalledWith(2, 'mkdir -p build/web/avon/assets/1.5x/brand-horizontal.png');
      });

      it('should copy assets of all the densities', () => {
        fs.existsSync.mockReturnValue(true);

        const execSpy = childProcess.execSync.mockImplementation(jest.fn);
        const config = registerCopyAssetsAction();

        config.do(dictionaryWithPng, dictionaryConfig);

        expect(execSpy).toHaveBeenNthCalledWith(1, 'cp assets/logo/brand-horizontal.png build/web/avon/assets/brand-horizontal.png');
        expect(execSpy).toHaveBeenNthCalledWith(2, 'cp assets/logo/1.5x/brand-horizontal.png build/web/avon/assets/1.5x/brand-horizontal.png');
        expect(execSpy).toHaveBeenNthCalledWith(3, 'cp assets/logo/2x/brand-horizontal.png build/web/avon/assets/2x/brand-horizontal.png');
        expect(execSpy).toHaveBeenNthCalledWith(4, 'cp assets/logo/3x/brand-horizontal.png build/web/avon/assets/3x/brand-horizontal.png');
        expect(execSpy).toHaveBeenNthCalledWith(5, 'cp assets/logo/4x/brand-horizontal.png build/web/avon/assets/4x/brand-horizontal.png');
      });
    });
  });

  describe('undo action', () => {
    it('should remove the assets on undo', () => {
      path.resolve.mockReturnValue('build/brand/assets');

      const config = registerCopyAssetsAction();

      fs.rmdirSync.mockImplementation(jest.fn);

      config.undo(dictionary, dictionaryConfig);

      expect(fs.rmdirSync).toHaveBeenCalledWith('build/brand/assets');
    });
  });
});
