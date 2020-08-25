import json from '@rollup/plugin-json';
import {
  directories, displayName,
} from './package.json';

const globals = {};

const external = [
  ...Object.keys(globals),
];
const plugins = [json()];

// eslint-disable-next-line max-lines-per-function
export default [
  {
    external,
    input: './build/web/index.js',
    output: [{
      compact: false,
      dir: directories.lib,
      exports: 'default',
      format: 'cjs',
      sourcemap: false,
    }],
    plugins,
  },
  {
    external,
    input: './build/react-native/index.js',
    output: [{
      compact: false,
      dir: directories['react-native'],
      exports: 'default',
      format: 'cjs',
      sourcemap: false,
    }],
    plugins,
  },
  {
    external,
    input: './build/web/index.js',
    output: [{
      compact: false,
      dir: `${directories.lib}/es`,
      format: 'es',
      sourcemap: false,
    }, {
      compact: false,
      dir: `${directories.lib}/esm`,
      format: 'esm',
      sourcemap: false,
    }, {
      compact: true,
      dir: `${directories.lib}/umd`,
      format: 'umd',
      globals,
      name: displayName,
      sourcemap: true,
    }],
    plugins,
  },
];
