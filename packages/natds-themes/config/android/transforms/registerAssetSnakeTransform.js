import { isAssetFile } from '../../shared/helpers';
import { propValueToSnakeCase } from '../shared/helpers';

export const registerAssetSnakeTransform = () => ({
  matcher: isAssetFile,
  name: 'asset/snake',
  transformer: propValueToSnakeCase,
  type: 'value',
});

export default registerAssetSnakeTransform;
