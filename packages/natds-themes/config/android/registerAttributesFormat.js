import path from 'path';
import { pipe, map } from 'ramda';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps } from '../shared/helpers';

export const registerAttributesFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/attributes.hbs');

  return formatBuilder(
    'android/attributes',
    templatePath,
    ({ properties }) => ({ properties: flattenProps(properties) }),
  );
};

export const registerSpectrumFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/colors.hbs');

  return formatBuilder('android/spectrum', templatePath, ({ properties }) => {
    const data = pipe(
      flattenProps,
      map((item) => ({ [item.name]: item.value })),
    )(properties);

    return ({ colors: data });
  });
};

export default registerAttributesFormat;
