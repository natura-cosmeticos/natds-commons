# Themes for Natura Design System

## Installation

```npm
npm i @naturacosmeticos/natds-themes
```

⚠️ This library is still in the experimental phase. Please avoid using it in applications in production environments.

## Usage

### 0.x versions

This example shows how to import and use tokens from Natura Light Theme.

```js
import {
  borderRadius,
  color,
  typography,
  // ...
} from '@naturacosmeticos/natds-themes/dist/react-dom/natura/light.json';

const yourAppBg = color.onBackground; 
const yourAppBorderRadius = borderRadius.medium;
const yourAppFontBase = typography.fontFamily.primary;
```
