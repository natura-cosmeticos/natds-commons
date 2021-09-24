import { isColor } from '../helpers/helpers';
import { hasAlpha } from '../../shared/helpers';

export const registerAlphaTransform = () => ({
  matcher: isColor,
  name: 'color/android-alpha',
  transformer: ({ value }) => {
    if (hasAlpha(value)) {
      return `#${value.substring(7)}${value.substring(1, 7)}`;
    }

    return value;
  },
  transitive: false,
  type: 'value',
});

export default registerAlphaTransform;
