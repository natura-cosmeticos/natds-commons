import { pipe, prop, map, fromPairs, mergeDeepRight, keys, join, concat } from 'ramda';
import svg2vectordrawable from 'svg2vectordrawable';

const handleDrawable = (item, data) => (content) => {
  const { globalConfig: { outputPath } } = data;
  const fileName = item.metadata.name.replace(/-/g, '_');

  const output = {
    content,
    outputPath: `${outputPath}/drawables/${fileName}.xml`,
  };

  return [fileName, output];
};

const buildTxt = (drawables, data) => {
  const { globalConfig: { fontName, outputPath } } = data;
  const iconNames = pipe(
    keys,
    join('\n'),
  )(drawables);

  return {
    content: `${iconNames}\n`,
    outputPath: `${outputPath}/${fontName}.txt`,
  };
};

const convertToDrawable = (data) => (item) => svg2vectordrawable(item.contents)
  .then(handleDrawable(item, data));

const buildOutputs = (data) => (drawables) => {
  const outputs = fromPairs(drawables);

  outputs.txt = buildTxt(outputs, data);

  return mergeDeepRight({ outputs }, data);
};

const buildPromises = (data) => pipe(
  prop('glyphsData'),
  map(convertToDrawable(data)),
)(data);

export const buildDrawable = (data) => {
  const drawables = buildPromises(data);

  return Promise
    .all(drawables)
    .then(buildOutputs(data));
};

export default buildDrawable;
