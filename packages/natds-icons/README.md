# Natura Design System - Icons

- How to Use
    - For web projects
      - Installation
      - Using React
      - Using as icon font
      - Using SVG
      - Where to find icon names
    - For React Native projects
    - For Android projects
    - For iOS projects
- How to contribute


## How to use

### Icon Names 📌

You can search for the names of the icons you need in our **[Natura Design System](https://natds.zeroheight.com/styleguide/s/41041/p/94367e-icon-library/b/6154b9)** website.

> **ℹ️ Note that the availability of the icons may vary depending on the version you use, so always try to use the latest stable version of `natds-icons`.**


### For web projects

#### Installation

- Using npm:

```powershell-interactive
npm install --save @naturacosmeticos/natds-icons
```
- Using yarn:

```powershell-interactive
yarn add @naturacosmeticos/natds-icons
```

- Using CDN:

This library is available to use from both `unpkg` and `jsdelivr`. You can load the files from this networks using URLs that points directly to the files you want, like this:

[https://unpkg.com/@naturacosmeticos/natds-icons@1.0.3/dist/natds-icons.css](https://unpkg.com/@naturacosmeticos/natds-icons@1.0.3/dist/natds-icons.css)

Or this:

[https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@version/dist/natds-icons.css](https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@version/dist/natds-icons.css)

  >**⚠️ You should replace `1.0.3` by the better version for your project. Always prefer the latest stable version.**

Check out [unpkg](https://unpkg.com/browse/@naturacosmeticos/natds-icons@1.0.3/dist/) and [jsdelivr](https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@1.0.3/dist/) to see the files you can import and their complete URLs.


#### Using React

If you are using React, you can check out our library for React components: [natds-web](https://github.com/natura-cosmeticos/natds-js/). There you can find [more instructions](https://github.com/natura-cosmeticos/natds-js/tree/main/packages/web/docs/icons.md) on how to use `natds-icons` along with those components.


#### Using as icon font

For using `natds-icons` as an *icon font* on web environments, you will need to serve the [font files](https://github.com/natura-cosmeticos/natds-commons/tree/master/packages/natds-icons/dist/fonts) and consume the [CSS file](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css) as you see fit.

You may also import the [JSON file](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json) that contains the relationships between the icon names and their `unicode` counterparts.

>**⚠️ We don't recommend using `unicodes`, specially before version [0.23.0](https://www.npmjs.com/package/@naturacosmeticos/natds-icons/v/0.23.0), as they were generated automatically and didn't persist between versions.**

You can import files like this:

```jsx
import {
  iconNames, // the .json file
  iconStyles, // the .css file
  NatdsIconsEot,
  NatdsIconsSvg,
  NatdsIconsTtf,
  NatdsIconsWoff,
  NatdsIconsWoff2
} from '@naturacosmeticos/natds-icons';
```

Or like this:

```html
<script src="node_modules/@naturacosmeticos/natds-icons/dist/natds-icons.json"></script>

<link href="node_modules/@naturacosmeticos/natds-icons/dist/natds-icons.css" rel="stylesheet">
```

After that, you can insert an icon by adding the name of the icon class to any inline HTML element. Like this example:

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

> **ℹ️ Working with TypeScript?**
>
> We also provide [declaration files for CSS](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css.d.ts) and [JSON](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json.d.ts), so you can avoid the `"Could not find a declaration file for module"` error.


#### Using SVG

You can use the SVG files for the icons individually by importing them from the [./dist/svg](./dist/svg) folder;



### For React Native projects

If you are using React Native, you can check out our library for React Native components: [natds-rn](https://github.com/natura-cosmeticos/natds-rn/). There you can find [more instructions](https://github.com/natura-cosmeticos/natds-rn/tree/master/docs/Icons.md) on how to use `natds-icons` along with those components.



### For Android projects

If you are developing for Android devices, you need to check out our library for Android components: [natds-android](https://github.com/natura-cosmeticos/natds-android/). There you can find [more instructions](https://github.com/natura-cosmeticos/natds-android/tree/master/doc/icon-token.md) on how to use `natds-icons` along with those components.



### For iOS projects

If you are developing for iOS devices, you need to check out our library for iOS components: [natds-ios](https://github.com/natura-cosmeticos/natds-ios/). There you can find [more instructions](https://github.com/natura-cosmeticos/natds-android/tree/master/doc/icon-token.md) on how to use `natds-icons` along with those components.



## How to contribute

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).
