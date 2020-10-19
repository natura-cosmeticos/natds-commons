# Natura Design System - Icons

## Installation

Install the  dependency:

```sh
# with npm
npm install --save @naturacosmeticos/natds-icons

# with yarn
yarn add @naturacosmeticos/natds-icons
```

## Usage

### For React web projects

If your React project is not already using our React component library for the Design System, please install the `natds-web` dependency:

```shell script
# with npm
npm install --save @naturacosmeticos/natds-web

# with yarn
yarn add @naturacosmeticos/natds-web
```

Then follow the instructions of [natds-web](https://github.com/natura-cosmeticos/natds-js/tree/main/packages/web).

Check out our [documentation for `Icon` in the React Storybook](https://natds-js.netlify.app/releases/v0.17.0/?path=/docs/components-icon--interactive).

### For React Native projects

If your React Native project is not already using our library for the Design System, please install the `natds-rn` dependency:

```shell script
# with npm
npm install --save @naturacosmeticos/natds-rn

# with yarn
yarn add @naturacosmeticos/natds-rn
```

Then follow the instructions of [Icons section of React Native readme](https://github.com/natura-cosmeticos/natds-rn/#icons).

Check out our [documentation for `Icon` in the React Native Storybook for web](https://natds-rn.netlify.app/?path=/docs/components-icon--all).

---

### For non-React projects

#### CSS + font

You can import fonts and the generated [CSS](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) and [JSON](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) files like this:

```jsx highlight-line="2"
import {
  iconNames, // the .json
  iconStyles, // the .css
  NatdsIconsEot,
  NatdsIconsSvg,
  NatdsIconsTtf,
  NatdsIconsWoff,
  NatdsIconsWoff2
} from '@naturacosmeticos/natds-icons';
```

For use on web environments, you will need to serve the fonts and consume the [CSS](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) file as you see fit.

You can also import the [JSON file](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) that contains the relationships between the icon names and their `unicode` counterparts (don't rely on the `unicodes`, they are generated automatically)

```jsx highlight-line="2"
import {
  NatdsIconsTtf,
  iconNames
} from '@naturacosmeticos/natds-icons';
```

#### Svg

You can use the svg icons individually by importing them from the [./dist/svg](./dist/svg) folder;

#### CDN

This library is available to use from both `unpkg` and `jsdelivr`

```shell
https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@0.22.0/dist/index.js
https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@0.22.0/dist/natds-icons.json
https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@0.22.0/dist/svg/filled-action-add.svg

https://unpkg.com/@naturacosmeticos/natds-icons@0.22.0/dist/index.js
https://unpkg.com/@naturacosmeticos/natds-icons@0.22.0/dist/natds-icons.json
https://unpkg.com/@naturacosmeticos/natds-icons@0.22.0/dist/svg/filled-action-add.svg
```

### iOS

A [natds-icons.swift](./dist/natds-icons.swift) file is generated to be used in ios projects.
Visit [natds-ios](https://github.com/natura-cosmeticos/natds-ios) for more information.

## Where to find icon names

You can search for the icons you need in our [Design System Storybook](https://storybook-web.natura.com.br).

Note that the availability of the icons may vary depending on the version you use.

So always try to use the latest version of `natds-icons`

## How to contribute

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).
