declare const Themes: Themes.Themes

declare namespace Themes {
  export interface BorderRadius {
	none: number
	small: number
	medium: number
	large: number
}

export interface Primary {
	fontFamily: string
	fontWeight: number
}

export interface Fallback {
	fontFamily: string
	fontWeight: number
}

export interface Label {
	fontSize: number
	letterSpacing: number
	lineHeight: number
	primary: Primary
	fallback: Fallback
}

export interface Button {
	label: Label
}

export interface Heading1 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Heading2 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Heading3 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Heading4 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Heading5 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Heading6 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Subtitle1 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Subtitle2 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Body1 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Body2 {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Caption {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Overline {
	fontSize: number
	fontWeight: number
	letterSpacing: number
}

export interface Opacity {
	transparent: number
	lower: number
	veryLow: number
	low: number
	mediumLow: number
	disabledLow: number
	disabled: number
	medium: number
	mediumHigh: number
	high: number
	veryHigh: number
	opaque: number
}

export interface Size {
	none: number
	micro: number
	tiny: number
	small: number
	standard: number
	semi: number
	semiX: number
	medium: number
	mediumX: number
	large: number
	largeX: number
	largeXX: number
	largeXXX: number
	huge: number
	hugeX: number
	hugeXX: number
	hugeXXX: number
	veryHuge: number
}

export interface FontFamily {
	primary: string
	secondary: string
	branding: string
	code: string
}

export interface LineHeight {
	reset: number
	small: number
	medium: number
	large: number
}

export interface FontWeight {
	regular: number
	medium: number
}

export interface Display {
	fontFamily: string
	fontWeight: number
}

export interface Headline {
	fontFamily: string
	fontWeight: number
}

export interface Regular {
	fontFamily: string
	fontWeight: number
}

export interface Bold {
	fontFamily: string
	fontWeight: number
}

export interface Body {
	regular: Regular
	bold: Bold
}

export interface Fallback {
	fontFamily: string
	fontWeight: number
}

export interface Typography {
	fontFamily: FontFamily
	lineHeight: LineHeight
	fontWeight: FontWeight
	display: Display
	headline: Headline
	body: Body
	fallback: Fallback
}

export interface Spacing {
	none: number
	micro: number
	tiny: number
	small: number
	standard: number
	semi: number
	large: number
	xLarge: number
}

export interface Color {
	primary: string
	onPrimary: string
	primaryLight: string
	onPrimaryLight: string
	primaryDark: string
	onPrimaryDark: string
	secondary: string
	onSecondary: string
	secondaryLight: string
	onSecondaryLight: string
	secondaryDark: string
	onSecondaryDark: string
	background: string
	onBackground: string
	surface: string
	onSurface: string
	highlight: string
	highEmphasis: string
	mediumEmphasis: string
	lowEmphasis: string
	link: string
	onLink: string
	success: string
	onSuccess: string
	warning: string
	onWarning: string
	alert: string
	onAlert: string
}

export interface Body {
	regular: string
	bold: string
}

export interface File {
	display: string
	headline: string
	body: Body
}

export interface Font {
	file: File
}

export interface A {
	file: string
	width: number
	height: number
}

export interface B {
	file: string
	width: number
	height: number
}

export interface Neutral {
	a: A
	b: B
}

export interface A {
	file: string
	width: number
	height: number
}

export interface B {
	file: string
	width: number
	height: number
}

export interface Custom {
	a: A
	b: B
}

export interface Brand {
	neutral: Neutral
	custom: Custom
}

export interface Asset {
	font: Font
	brand: Brand
}

export interface Elevation {
	none: string
	micro: string
	tiny: string
	small: string
	medium: string
	large: string
	largeX: string
	largeXX: string
	huge: string
	hugeX: string
	hugeXX: string
}

export interface Theme {
	borderRadius: BorderRadius
	button: Button
	heading1: Heading1
	heading2: Heading2
	heading3: Heading3
	heading4: Heading4
	heading5: Heading5
	heading6: Heading6
	subtitle1: Subtitle1
	subtitle2: Subtitle2
	body1: Body1
	body2: Body2
	caption: Caption
	overline: Overline
	opacity: Opacity
	size: Size
	typography: Typography
	spacing: Spacing
	color: Color
	asset: Asset
	elevation: Elevation
}

  export interface BrandThemes {
    dark: Theme
    light: Theme
  }

  export interface Themes {
    aesop: BrandThemes
    avon: BrandThemes
    natura: BrandThemes
    theBodyShop: BrandThemes
  }
}

export = Themes