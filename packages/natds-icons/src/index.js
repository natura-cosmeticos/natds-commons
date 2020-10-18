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
  writeFiles,
} from './actions';

const globalConfig = {
  cleanedSvgOutput: path.resolve(__dirname, '../dist/svg'),
  fontExtensions: ['eot', 'ttf', 'woff', 'woff2', 'svg'],
  fontName: 'natds-icons',
  iconCodesPath: path.resolve(__dirname, './generated/natds-icons-codes.json'),
  outputPath: path.resolve(__dirname, '../dist'),
  rawSvgInput: './svg/**/*.svg',
};

const log = (msg) => console.log(msg);
const logObj = (obj) => console.log(Object.keys(obj));

buildSvgPaths({ globalConfig })
  .then(optimizeSvg)
  .then(buildPreviousIconCodes)
  .then(buildInitialFontData)
  .then(buildCurrentIconCodes)
  .then(buildJson)
  .then(buildJsonDts)
  .then(buildCss)
  .then(buildCssDts)
  .then(buildFonts)
  .then(buildSwift)
  .then(writeFiles)
  .then(logObj)
  .catch(log);
