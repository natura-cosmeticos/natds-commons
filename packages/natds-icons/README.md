# Natura Design System - Icons

- [Icon Names](#icon-names-)
- [How to Use](#how-to-use)
    - [Using NatDS Libraries](#using-natds-libraries) 
    - [Without Using NatDS Libraries](#without-using-natds-libraries)
        - [Web development](#web-development)
            - [Installation](#installation)
            - [Using CSS + icon font](#using-css--icon-font)
            - [Using SVG](#using-svg)
        - [Android development](#android-development)
- [How to contribute](#how-to-contribute)

## Icon Names 📌

You can search for the names of the icons you need in our **[Natura Design System](https://natds.natura.design/icon-library)** website.

> **ℹ️ Note that the availability of the icons may vary depending on the version you use, so always try to use the latest stable version of `natds-icons`.**

## How to use

### Using NatDS Libraries

If you are developing for theses platforms, you can check out our component libraries for: Android ([natds-android](https://github.com/natura-cosmeticos/natds-android/)), iOS ([natds-ios](https://github.com/natura-cosmeticos/natds-ios/)), React ([natds-web](https://github.com/natura-cosmeticos/natds-js/tree/main/packages/web/)), and React Native ([natds-rn](https://github.com/natura-cosmeticos/natds-rn/)).

Here you can find more instructions on how to use `natds-icons` along with those libraries:

- [natds-android](https://github.com/natura-cosmeticos/natds-android/tree/master/doc/icon-token.md)
- [natds-ios](https://github.com/natura-cosmeticos/natds-ios/blob/master/docs/using-icons.md)
- [natds-web](https://github.com/natura-cosmeticos/natds-js/tree/main/packages/web/docs/icons.md/)
- [natds-rn](https://github.com/natura-cosmeticos/natds-rn/tree/master/docs/Icons.md)


### Without Using NatDS Libraries

#### Web development

##### Installation

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

[https://unpkg.com/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css](https://unpkg.com/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css)

Or this:

[https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css](https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css)

  >**⚠️ You can replace `latest` by the better version for your project. We recommend you always use the latest stable version.**

Check out [unpkg](https://unpkg.com/browse/@naturacosmeticos/natds-icons@latest/dist/) and [jsdelivr](https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/) to see the files you can import and their complete URLs.


> **ℹ️ Working with TypeScript?**
>
> We also provide [declaration files for CSS](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.css.d.ts) and [JSON](https://github.com/natura-cosmeticos/natds-commons/blob/master/packages/natds-icons/dist/natds-icons.json.d.ts), so you can avoid the `"Could not find a declaration file for module"` error.


##### Using CSS + icon font

Load the font icons from the package `@naturacosmeticos/natds-icons`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">
```

or load it from `node_modules` with a module bundler like `webpack` or `rollup`

*main.js:*
```javascript
import React from 'react';
import '@naturacosmeticos/natds-icons/natds-icons.css';
```

*webpack.config.js:*
```javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  }
};
```

After that, you can insert an icon by adding the name of the icon class to any inline HTML element. Like this example:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">
</head>
<body>

    <i class="natds-icons natds-icons-filled-action-love"></i>

</body>
</html>
```

The `<i>` and `<span>` elements are widely used to add icons.

All the icons can be customized with CSS (size, color, shadow, etc.), but we recommend using the class names provided to make it easier to stick to our overall design guidelines.

If you need a customization that is not provided yet, please consider [contributing](./CONTRIBUTING.md), or you can [create an issue](https://github.com/natura-cosmeticos/natds-commons/issues/new/choose).


##### Using SVG

You can use the SVG files for the icons individually by importing them from the [./dist/svg](./dist/svg) folder or CDN. Like this example:

```html
<!DOCTYPE html>
<html>
<body>

    <img src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@1.0.3/dist/svg/filled-action-rating.svg" alt="star icon">

</body>
</html>
```

Or like this:

```html
<!DOCTYPE html>
<html>
<body>

    <a href="/" class="rating-star">
      Rate this product!
    </a>

</body>
</html>
```

```css
.rating-star {
  display: block;
  text-indent: -9999px;
  background: url(https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@1.0.3/dist/svg/filled-action-rating.svg);
}
```

#### Android development

In order to use `natds-icons` in an Android project, you must add a new dependency.
To download the dependency it is necessary to use a Github active account. You Can create in your project a file - for ex: `github_credentials`- with properties and fill it with Github username and Access token. For getting your GitHub access token see the [Tutorial](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). Its important to check `read:packages` when generating you password. In the file `build.gradle`, insert these informations:

```gradle
repositories {
    def githubProperties = new Properties()
    def githubFile = rootProject.file("github_credentials.properties")
    if (githubFile.exists()) {
        githubProperties.load(new FileInputStream(githubFile))
    }
    //To Access Nat DS Icons dependency at Github Packages
    maven {
        name = "natds-commons"
        url = uri("https://maven.pkg.github.com/natura-cosmeticos/natds-commons")
        credentials {
            username = githubProperties['github.username'] ?: System.getenv("GITHUB_USERNAME")
            password = githubProperties['github.password'] ?: System.getenv("GITHUB_API_KEY")
        }
    }
}
```
And:

```gradle
dependencies {
implementation "com.natura:icons:$rootProject.<version>"
}
```

With the dependency configured, you can access our icons as drawables. 😃


## How to contribute

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).
