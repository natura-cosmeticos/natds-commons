import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import { dependencies, directories, source } from './package.json';
import { compilerOptions } from './tsconfig.json';

const globals = {
  '@storybook/theming/create': 'create',
};

const external = [
  ...Object.keys(globals),
  ...Object.keys(dependencies),
];
const plugins = [json(), image()];

export default [
  {
    external,
    input: source,
    output: [{
      compact: false,
      dir: directories.lib,
      exports: 'default',
      format: 'cjs',
      sourcemap: false,
    }],
    plugins: [
      typescript({
        ...compilerOptions,
        declaration: true,
        declarationDir: directories.lib,
      }),
      ...plugins,
    ],
  },
  {
    external,
    input: source,
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
      name: 'StorybookThemes',
      sourcemap: true,
    }],
    plugins: [
      typescript(compilerOptions),
      ...plugins,
    ],
  },
];
