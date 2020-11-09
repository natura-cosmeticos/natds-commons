import icons from './natds-icons.json';

const iconNames = Object.keys(icons)

export type IconName = keyof typeof icons;

export {
  icons,
  iconNames,
};
