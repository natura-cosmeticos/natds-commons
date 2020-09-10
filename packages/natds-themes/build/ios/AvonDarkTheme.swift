/***
 *
 *  ███╗   ██╗ █████╗ ████████╗██████╗ ███████╗   ████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
 *  ████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔════╝   ╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
 *  ██╔██╗ ██║███████║   ██║   ██║  ██║███████╗█████╗██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
 *  ██║╚██╗██║██╔══██║   ██║   ██║  ██║╚════██║╚════╝██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
 *  ██║ ╚████║██║  ██║   ██║   ██████╔╝███████║      ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
 *  ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝      ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝
 *                                                                                                       
 *  https://github.com/natura-cosmeticos/natds-commons/tree/master/packages/natds-themes
 *  
 *  Generated by natds-themes in Thu Sep 10 2020
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

struct AvonDarkTheme: Theme {
  let tokens: TokensProtocol = AvonDarkTokens()
  let components: ComponentsProtocol = AvonDarkComponents()
}

struct AvonDarkTokens: Tokens {
  let borderRadiusNone: CGFloat = 0
  let borderRadiusSmall: CGFloat = 2
  let borderRadiusMedium: CGFloat = 4
  let borderRadiusLarge: CGFloat = 8
  let colorPrimary = "#F091C9"
  let colorOnPrimary = "#000000"
  let colorPrimaryLight = "#FFC3FC"
  let colorOnPrimaryLight = "#000000"
  let colorPrimaryDark = "#BC6198"
  let colorOnPrimaryDark = "#000000"
  let colorSecondary = "#E9E9E9"
  let colorOnSecondary = "#333333"
  let colorSecondaryLight = "#FFFFFF"
  let colorOnSecondaryLight = "#333333"
  let colorSecondaryDark = "#B7B7B7"
  let colorOnSecondaryDark = "#333333"
  let colorBackground = "#121212"
  let colorOnBackground = "#FFFFFF"
  let colorSurface = "#333333"
  let colorOnSurface = "#FFFFFF"
  let colorHighlight = "#FFFFFF"
  let colorHighEmphasis = "#FAFAFA"
  let colorMediumEmphasis = "#BBBBBB"
  let colorLowEmphasis = "#777777"
  let colorLink = "#227BBD"
  let colorOnLink = "#FFFFFF"
  let colorSuccess = "#569A32"
  let colorOnSuccess = "#FFFFFF"
  let colorWarning = "#FCC433"
  let colorOnWarning = "#333333"
  let colorAlert = "#E74627"
  let colorOnAlert = "#FFFFFF"
  let elevationNoneShadowColor = "nil"
  let elevationNoneShadowOffsetWidth: CGFloat = 0
  let elevationNoneShadowOffsetHeight: CGFloat = -3
  let elevationNoneShadowRadius: CGFloat = 3
  let elevationNoneShadowOpacity: CGFloat = 0
  let elevationMicroShadowColor = "#000000"
  let elevationMicroShadowOffsetWidth: CGFloat = 0
  let elevationMicroShadowOffsetHeight: CGFloat = 1
  let elevationMicroShadowRadius: CGFloat = 1
  let elevationMicroShadowOpacity: CGFloat = 0.14
  let elevationTinyShadowColor = "#000000"
  let elevationTinyShadowOffsetWidth: CGFloat = 0
  let elevationTinyShadowOffsetHeight: CGFloat = 2
  let elevationTinyShadowRadius: CGFloat = 2
  let elevationTinyShadowOpacity: CGFloat = 0.14
  let elevationSmallShadowColor = "#000000"
  let elevationSmallShadowOffsetWidth: CGFloat = 0
  let elevationSmallShadowOffsetHeight: CGFloat = 3
  let elevationSmallShadowRadius: CGFloat = 4
  let elevationSmallShadowOpacity: CGFloat = 0.14
  let elevationMediumShadowColor = "#000000"
  let elevationMediumShadowOffsetWidth: CGFloat = 0
  let elevationMediumShadowOffsetHeight: CGFloat = 4
  let elevationMediumShadowRadius: CGFloat = 5
  let elevationMediumShadowOpacity: CGFloat = 0.14
  let elevationLargeShadowColor = "#000000"
  let elevationLargeShadowOffsetWidth: CGFloat = 0
  let elevationLargeShadowOffsetHeight: CGFloat = 6
  let elevationLargeShadowRadius: CGFloat = 10
  let elevationLargeShadowOpacity: CGFloat = 0.14
  let elevationLargeXShadowColor = "#000000"
  let elevationLargeXShadowOffsetWidth: CGFloat = 0
  let elevationLargeXShadowOffsetHeight: CGFloat = 8
  let elevationLargeXShadowRadius: CGFloat = 10
  let elevationLargeXShadowOpacity: CGFloat = 0.14
  let elevationLargeXXShadowColor = "#000000"
  let elevationLargeXXShadowOffsetWidth: CGFloat = 0
  let elevationLargeXXShadowOffsetHeight: CGFloat = 9
  let elevationLargeXXShadowRadius: CGFloat = 12
  let elevationLargeXXShadowOpacity: CGFloat = 0.14
  let elevationHugeShadowColor = "#000000"
  let elevationHugeShadowOffsetWidth: CGFloat = 0
  let elevationHugeShadowOffsetHeight: CGFloat = 12
  let elevationHugeShadowRadius: CGFloat = 17
  let elevationHugeShadowOpacity: CGFloat = 0.14
  let elevationHugeXShadowColor = "#000000"
  let elevationHugeXShadowOffsetWidth: CGFloat = 0
  let elevationHugeXShadowOffsetHeight: CGFloat = 16
  let elevationHugeXShadowRadius: CGFloat = 24
  let elevationHugeXShadowOpacity: CGFloat = 0.14
  let elevationHugeXXShadowColor = "#000000"
  let elevationHugeXXShadowOffsetWidth: CGFloat = 0
  let elevationHugeXXShadowOffsetHeight: CGFloat = 24
  let elevationHugeXXShadowRadius: CGFloat = 38
  let elevationHugeXXShadowOpacity: CGFloat = 0.14
  let opacityTransparent: CGFloat = 0
  let opacityLower: CGFloat = 0.04
  let opacityVeryLow: CGFloat = 0.08
  let opacityLow: CGFloat = 0.12
  let opacityMediumLow: CGFloat = 0.16
  let opacityDisabledLow: CGFloat = 0.24
  let opacityDisabled: CGFloat = 0.32
  let opacityMedium: CGFloat = 0.48
  let opacityMediumHigh: CGFloat = 0.56
  let opacityHigh: CGFloat = 0.64
  let opacityOpaque: CGFloat = 1
  let sizeNone: CGFloat = 0
  let sizeMicro: CGFloat = 4
  let sizeTiny: CGFloat = 8
  let sizeSmall: CGFloat = 16
  let sizeStandard: CGFloat = 24
  let sizeSemi: CGFloat = 32
  let sizeSemiX: CGFloat = 40
  let sizeMedium: CGFloat = 48
  let sizeMediumX: CGFloat = 56
  let sizeLarge: CGFloat = 64
  let sizeLargeX: CGFloat = 72
  let sizeLargeXX: CGFloat = 80
  let sizeLargeXXX: CGFloat = 88
  let sizeHuge: CGFloat = 96
  let sizeHugeX: CGFloat = 128
  let sizeHugeXX: CGFloat = 144
  let sizeHugeXXX: CGFloat = 192
  let sizeVeryHuge: CGFloat = 256
  let spacingNone: CGFloat = 0
  let spacingMicro: CGFloat = 4
  let spacingTiny: CGFloat = 8
  let spacingSmall: CGFloat = 16
  let spacingStandard: CGFloat = 24
  let spacingSemi: CGFloat = 32
  let spacingLarge: CGFloat = 48
  let spacingXLarge: CGFloat = 64
  let typographyFontFamilyPrimary = "San Francisco"
  let typographyFontFamilySecondary = "sans-serif"
  let typographyFontFamilyBranding = "Helvetica Now"
  let typographyFontFamilyCode = "SF Mono"
  let typographyLineHeightReset: CGFloat = 1
  let typographyLineHeightSmall: CGFloat = 1.25
  let typographyLineHeightMedium: CGFloat = 1.5
  let typographyLineHeightLarge: CGFloat = 2
  let typographyFontWeightRegular: UIFont.Weight = .regular
  let typographyFontWeightMedium: UIFont.Weight = .medium
}

struct AvonDarkComponents: Components {
  let buttonDefaultFontSize: CGFloat = 14
  let buttonDefaultFontWeight: UIFont.Weight = .medium
  let buttonDefaultLetterSpacing: CGFloat = 0.44
  let buttonDefaultLineHeight: CGFloat = 1.5
  let heading1FontSize: CGFloat = 96
  let heading1FontWeight: UIFont.Weight = .regular
  let heading1LetterSpacing: CGFloat = 0
  let heading2FontSize: CGFloat = 60
  let heading2FontWeight: UIFont.Weight = .regular
  let heading2LetterSpacing: CGFloat = 0
  let heading3FontSize: CGFloat = 48
  let heading3FontWeight: UIFont.Weight = .regular
  let heading3LetterSpacing: CGFloat = 0
  let heading4FontSize: CGFloat = 34
  let heading4FontWeight: UIFont.Weight = .regular
  let heading4LetterSpacing: CGFloat = 0.08
  let heading5FontSize: CGFloat = 24
  let heading5FontWeight: UIFont.Weight = .regular
  let heading5LetterSpacing: CGFloat = 0
  let heading6FontSize: CGFloat = 20
  let heading6FontWeight: UIFont.Weight = .medium
  let heading6LetterSpacing: CGFloat = 0.12
  let subtitle1FontSize: CGFloat = 16
  let subtitle1FontWeight: UIFont.Weight = .medium
  let subtitle1LetterSpacing: CGFloat = 0.08
  let subtitle2FontSize: CGFloat = 14
  let subtitle2FontWeight: UIFont.Weight = .medium
  let subtitle2LetterSpacing: CGFloat = 0.08
  let body1FontSize: CGFloat = 16
  let body1FontWeight: UIFont.Weight = .regular
  let body1LetterSpacing: CGFloat = 0.32
  let body2FontSize: CGFloat = 14
  let body2FontWeight: UIFont.Weight = .regular
  let body2LetterSpacing: CGFloat = 0.16
  let captionFontSize: CGFloat = 12
  let captionFontWeight: UIFont.Weight = .regular
  let captionLetterSpacing: CGFloat = 0.16
  let overlineFontSize: CGFloat = 12
  let overlineFontWeight: UIFont.Weight = .medium
  let overlineLetterSpacing: CGFloat = 0.8
}
