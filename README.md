# natds-commons

A monorepo containing Natura Design System multiplatform packages.

___

## Getting started

Make sure you have `node` and `yarn` installed

## Instalation

At the root directory run `yarn install`

## Commands available to all packages

The commands bellow can be run by

```bash
yarn <command>
```

`test`: runs packages tests

`lint`: runs eslint using the `@naturacosmeticos/eslint-config-natura` rules

`commit`: opens an interactive GUI to help you write commits in compliance with `conventional commits`

`prerelease`: analize commits, bump packages and make the apropriate releases

`release`: analize commits, bump packages and make the apropriate pre-releases
