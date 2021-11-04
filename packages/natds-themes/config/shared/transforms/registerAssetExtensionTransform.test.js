import { registerAssetExtensionTransform } from './registerAssetExtensionTransform';
import * as helpers from '../helpers';

jest.mock('../helpers');

const prop = { path: ['asset', 'brand', 'a', 'file'] };

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

  it('should add the logo extensions by platform', () => {
    helpers
      .isProp
      .mockReturnValue(() => true);

    const config = registerAssetExtensionTransform();

    const result = config.transformer(prop, { buildPath: 'build/web/avon' });

    expect(result).toEqual({ assetOptions: { extensions: ['svg'] } });
  });

  it('should add the font extensions by platform', () => {
    helpers
      .isProp
      .mockReturnValue(() => false);

    const config = registerAssetExtensionTransform();

    const result = config.transformer(prop, { buildPath: 'build/web/avon' });

    expect(result).toEqual({ assetOptions: { extensions: ['ttf', 'eot', 'woff', 'woff2'] } });
  });

  it('should match only assets', () => {
    const isAssetSpy = jest.fn();

    jest
      .spyOn(helpers, 'isAssetFile')
      .mockImplementation(isAssetSpy);

    const config = registerAssetExtensionTransform();

    config.matcher(prop);

    expect(isAssetSpy).toHaveBeenCalledWith(prop);
  });
});
