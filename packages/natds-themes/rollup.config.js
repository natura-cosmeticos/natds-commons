import json from '@rollup/plugin-json'
import {
  directories, displayName
} from './package.json'

const plugins = [json()]

// eslint-disable-next-line max-lines-per-function
export default [
  {
    input: './build/react-native/index.js',
    output: [{
      compact: false,
      dir: directories['react-native'],
      exports: 'default',
      format: 'cjs',
      sourcemap: false
    }],
    plugins
  },
  {
    input: './build/web/index.js',
    output: [
      {
        compact: false,
        dir: `${directories.lib}/esm`,
        format: 'esm',
        sourcemap: false
      }, {
        compact: true,
        dir: `${directories.lib}/umd`,
        format: 'umd',
        name: displayName,
        sourcemap: true
      },
      {
        compact: false,
        dir: directories.lib,
        exports: 'default',
        format: 'cjs',
        sourcemap: false
      }
    ],
    plugins
  }
]
