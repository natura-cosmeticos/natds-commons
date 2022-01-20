import json from '@rollup/plugin-json'

export default {
  external: [],
  input: './dist/index.js',
  output: [
    {
      dir: './dist/cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: './dist/esm',
      format: 'esm',
      sourcemap: true
    },
    {
      dir: './dist/iife',
      format: 'iife',
      name: 'natdsIcons',
      sourcemap: true
    },
    {
      dir: './dist/umd',
      format: 'umd',
      name: 'natdsIcons',
      sourcemap: true
    }
  ],
  plugins: [
    json()
  ]
}
