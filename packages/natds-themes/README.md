# Themes for Natura Design System

## Installation

```npm
npm i @naturacosmeticos/natds-themes
```

## Import

### For web projects (like React)

```js
import { natura } from '@naturacosmeticos/natds-themes';
```

### For React Native projects

```js
import { natura } from '@naturacosmeticos/natds-themes/react-native';
```

## Usage

This example shows how to import and use tokens from Natura Light Theme.

```js
import { natura } from '@naturacosmeticos/natds-themes';
// or
import { natura } from '@naturacosmeticos/natds-themes/react-native';

const { borderRadius, color, typography } = natura.light;

const yourAppBg = color.onBackground; 
const yourAppBorderRadius = borderRadius.medium;
const yourAppFontBase = typography.fontFamily.primary;
```
