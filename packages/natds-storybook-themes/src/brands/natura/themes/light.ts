import { create } from '@storybook/theming/create';
import { natura } from '@naturacosmeticos/natds-themes';
import { brandGlobals } from '../../../globals/brand';

/**
 * @todo extract Natura brand image to a token
 */
import brandImage from '../assets/images/logo.png';

/**
 * @todo extract Natura favicon to a token
 */
import '../assets/images/favicon.png';

const { borderRadius, color, typography } = natura.light;

export const naturaLightStorybookTheme = create({
  ...brandGlobals,
  appBg: color.onBackground,
  /**
   * @todo use corresponding token
   */
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: borderRadius.medium,
  appContentBg: color.background,
  barBg: color.onBackground,
  barSelectedColor: color.primary,
  barTextColor: color.background,
  base: 'light',
  /**
   * @todo move white brand image to dark theme
   */
  brandImage,
  colorPrimary: color.primary,
  colorSecondary: color.secondary,
  fontBase: `"${typography.fontFamily.primary}", "${typography.fontFamily.secondary}"`,
  fontCode: `"${typography.fontFamily.code}", monospace`,
  inputBg: color.surface,
  inputBorder: color.lowEmphasis,
  inputBorderRadius: borderRadius.medium,
  inputTextColor: color.onSurface,
  textColor: color.onSurface,
  textInverseColor: color.surface,
});

export default naturaLightStorybookTheme;
