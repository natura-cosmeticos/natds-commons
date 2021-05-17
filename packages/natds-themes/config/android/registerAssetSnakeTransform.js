import { isAsset } from '../shared/helpers';
import { propValueToSnakeCase } from './helpers';

export const registerAssetSnakeTransform = () => ({
  matcher: isAsset,
  name: 'asset/snake',
  transformer: propValueToSnakeCase,
  type: 'value',
});

export default registerAssetSnakeTransform;
