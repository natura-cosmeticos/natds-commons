# Natura Design System - Icons

## Installation

Using npm:
```sh
npm install --save @naturacosmeticos/natds-icons
```
Using yarn:
```sh
yarn add @naturacosmeticos/natds-icons
```

## Usage

### For React web projects

If your React project is not already using our React component library for the Design System, please install the `natds-web` dependency:

Using npm:
```sh
npm install --save @naturacosmeticos/natds-web
```
Using yarn:
```sh
yarn add @naturacosmeticos/natds-web
```

Then follow the instructions of [natds-web](https://github.com/natura-cosmeticos/natds-js/tree/main/packages/web/docs/icons.md).

---

### For React Native projects

If your React Native project is not already using our library for the Design System, please install the `natds-rn` dependency:

Using npm:
```sh
npm install --save @naturacosmeticos/natds-rn
```
Using yarn:
```sh
yarn add @naturacosmeticos/natds-rn
```

Then follow the instructions of [natds-rn](https://github.com/natura-cosmeticos/natds-rn/tree/master/docs/Icons.md).

---

### For non-React projects

#### CSS + font

You can import fonts and the generated [CSS](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css) and [JSON](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json) files like this:

```jsx
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

For use on web environments, you will need to serve the fonts and consume the [CSS file](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css) as you see fit.

After this, you can insert an icon by adding the name of the icon class to any inline HTML element. Like this example:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@0.22.0/dist/natds-icons.css">
</head>
<body>

<i class="natds-icons natds-icons-filled-action-love"></i>

</body>
</html>
```

The `<i>` and `<span>` elements are widely used to add icons.

All the icons can be customized with CSS (size, color, shadow, etc.), but we recommend using the class names provided to make it easier to stick to our overall design guidelines.

If you need a customization that is not provided yet, please consider [contributing](./CONTRIBUTING.md), or you can [create an issue](https://github.com/natura-cosmeticos/natds-commons/issues/new/choose).

You can also import the [JSON file](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json) that contains the relationships between the icon names and their `unicode` counterparts.

> ⚠️ We don't recommend using `unicodes`, specially before version [0.23.0](https://www.npmjs.com/package/@naturacosmeticos/natds-icons/v/0.23.0), as they were generated automatically and didn't persist between versions.

```jsx
import {
  NatdsIconsTtf,
  iconNames
} from '@naturacosmeticos/natds-icons';
```

Working with TypeScript? We also provide [declaration files for CSS](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css.d.ts) and [JSON](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json.d.ts), so you can avoid "Could not find a declaration file for module" error.

#### SVG

You can use the SVG icons individually by importing them from the [./dist/svg](./dist/svg) folder;

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

You can replace `0.22.0` by the better version for your project. Always prefer the latest stable version.

---

### For Android projects

The `.xml` files inside [./dist/drawables](./dist/drawables) are generated to be used in Android projects.
You can [visit `natds-android` project](https://github.com/natura-cosmeticos/natds-android) for more info.

---

### For iOS projects

A [natds-icons.swift](./dist/natds-icons.swift) file is generated to be used in iOS projects.
You can [visit `natds-ios` project](https://github.com/natura-cosmeticos/natds-ios) for more info.

---

## Where to find icon names

You can search for the icons you need in our [Design System Storybook](https://storybook-web.natura.com.br).

Note that the availability of the icons may vary depending on the version you use, so always try to use the latest version of `natds-icons`.

## How to contribute

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).
