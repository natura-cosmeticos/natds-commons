import { registerAssetExtensionTransform } from './registerAssetExtensionTransform';
import * as helpers from '../helpers';

jest.mock('../helpers');

describe('registerAssetExtensionTransform', () => {
  it('should return the transform config', () => {
    const config = registerAssetExtensionTransform();

    const expectedConfig = {
      matcher: expect.any(Function),
      name: 'asset/extension',
      transformer: expect.any(Function),
      transitive: true,
      type: 'attribute',
    };

    expect(config).toMatchObject(expectedConfig);
  });

  it('should add the extensions by platform', () => {
    const config = registerAssetExtensionTransform();

    const result = config.transformer({}, { buildPath: 'build/android/avon' });

    expect(result).toEqual({ assetOptions: { extensions: ['svg', 'png'] } });
  });

  it('should match only assets', () => {
    const isAssetSpy = jest.fn();

    jest
      .spyOn(helpers, 'isAssetFile')
      .mockImplementation(isAssetSpy);

    const config = registerAssetExtensionTransform();
    const prop = { path: ['asset', 'brand', 'a', 'file'] };

    config.matcher(prop);

    expect(isAssetSpy).toHaveBeenCalledWith(prop);
  });
});
