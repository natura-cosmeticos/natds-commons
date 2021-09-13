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

export interface Badge {
	label: Label
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

export interface Enable {
	background: string
	border: string
	label: string
}

export interface Disable {
	background: string
	border: string
	label: string
}

export interface Hover {
	background: string
	border: string
	label: string
}

export interface Focu {
	background: string
	border: string
	label: string
}

export interface Color {
	enable: Enable
	disable: Disable
	hover: Hover
	focus: Focu
}

export interface Contained {
	color: Color
}

export interface Enable {
	background: string
	border: string
	label: string
}

export interface Disable {
	background: string
	border: string
	label: string
}

export interface Hover {
	background: string
	border: string
	label: string
}

export interface Focu {
	background: string
	border: string
	label: string
}

export interface Color {
	enable: Enable
	disable: Disable
	hover: Hover
	focus: Focu
}

export interface Outlined {
	color: Color
}

export interface Enable {
	background: string
	border: string
	label: string
}

export interface Disable {
	background: string
	border: string
	label: string
}

export interface Hover {
	background: string
	border: string
	label: string
}

export interface Focu {
	background: string
	border: string
	label: string
}

export interface Color {
	enable: Enable
	disable: Disable
	hover: Hover
	focus: Focu
}

export interface Text {
	color: Color
}

export interface Button {
	label: Label
	borderRadius: number
	contained: Contained
	outlined: Outlined
	text: Text
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

export interface Neutral {
	50: string
	100: string
	200: string
	300: string
	400: string
	500: string
	600: string
	700: string
	800: string
	900: string
}

export interface Color {
	neutral: Neutral
	primary: string
	onPrimary: string
	primaryLight: string
	onPrimaryLight: string
	primaryLightest: string
	onPrimaryLightest: string
	primaryDark: string
	onPrimaryDark: string
	primaryDarkest: string
	onPrimaryDarkest: string
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

export interface None {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Micro {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Tiny {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Small {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Medium {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Large {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface LargeX {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface LargeXX {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Huge {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface HugeX {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface HugeXX {
	shadowColor: string
	shadowOffsetWidth: number
	shadowOffsetHeight: number
	shadowRadius: number
	shadowOpacity: number
	elevation: number
}

export interface Elevation {
	none: None
	micro: Micro
	tiny: Tiny
	small: Small
	medium: Medium
	large: Large
	largeX: LargeX
	largeXX: LargeXX
	huge: Huge
	hugeX: HugeX
	hugeXX: HugeXX
}

export interface Theme {
	borderRadius: BorderRadius
	badge: Badge
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