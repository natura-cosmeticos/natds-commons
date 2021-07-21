declare const Themes: Themes.Themes

declare namespace Themes {
  export interface Gray {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Red {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Pink {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Grape {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Violet {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Indigo {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Blue {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Cyan {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Teal {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Green {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Lime {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Yellow {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Orange {
	0: string
	1: string
	2: string
	3: string
	4: string
	5: string
	6: string
	7: string
	8: string
	9: string
}

export interface Brand {
	primary: string
	primaryDark: string
	primaryLight: string
	secondary: string
	secondaryDark: string
	secondaryLight: string
	tertiary: string
	tertiaryDark: string
	tertiaryLight: string
}

export interface Color {
	brand: Brand
}

export interface Spectrum {
	dark: string
	light: string
	gray: Gray
	red: Red
	pink: Pink
	grape: Grape
	violet: Violet
	indigo: Indigo
	blue: Blue
	cyan: Cyan
	teal: Teal
	green: Green
	lime: Lime
	yellow: Yellow
	orange: Orange
	color: Color
}

export interface Theme {
	spectrum: Spectrum
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