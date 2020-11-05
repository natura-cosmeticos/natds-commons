import path from 'path';
import {
  buildSvgPaths,
  optimizeSvg,
  buildPreviousIconCodes,
  buildInitialFontData,
  buildCurrentIconCodes,
  buildJson,
  buildJsonDts,
  buildCss,
  buildCssDts,
  buildFonts,
  buildSwift,
  buildDrawable,
  writeFiles,
} from './actions';

export const buildConfig = () => ({
  cleanedSvgOutput: path.resolve(__dirname, '../dist/svg'),
  fontExtensions: ['eot', 'ttf', 'woff', 'woff2', 'svg'],
  fontName: 'natds-icons',
  iconCodesPath: path.resolve(__dirname, './generated/natds-icons-codes.json'),
  outputPath: path.resolve(__dirname, '../dist'),
  rawSvgInput: './svg/**/*.svg',
});

export const init = () => buildSvgPaths({
  globalConfig: buildConfig(),
}).then(optimizeSvg)
  .then(buildPreviousIconCodes)
  .then(buildInitialFontData)
  .then(buildCurrentIconCodes)
  .then(buildJson)
  .then(buildJsonDts)
  .then(buildCss)
  .then(buildCssDts)
  .then(buildFonts)
  .then(buildSwift)
  .then(buildDrawable)
  .then(writeFiles)
  .catch((msg) => console.log(msg));

export default init;
