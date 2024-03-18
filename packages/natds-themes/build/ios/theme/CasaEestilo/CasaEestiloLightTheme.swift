/***
 *
 *  ███╗   ██╗ █████╗ ████████╗██████╗ ███████╗   ████████╗██╗  ██╗███████╗███╗   ███╗███████╗███████╗
 *  ████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔════╝   ╚══██╔══╝██║  ██║██╔════╝████╗ ████║██╔════╝██╔════╝
 *  ██╔██╗ ██║███████║   ██║   ██║  ██║███████╗█████╗██║   ███████║█████╗  ██╔████╔██║█████╗  ███████╗
 *  ██║╚██╗██║██╔══██║   ██║   ██║  ██║╚════██║╚════╝██║   ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  ╚════██║
 *  ██║ ╚████║██║  ██║   ██║   ██████╔╝███████║      ██║   ██║  ██║███████╗██║ ╚═╝ ██║███████╗███████║
 *  ╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═════╝ ╚══════╝      ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝
 *                                                                                                       
 *  https://github.com/natura-cosmeticos/natds-commons/tree/main/packages/natds-themes
 *  
 *  Generated by @naturacosmeticos/natds-themes
 *  v0.70.0
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

struct CasaEestiloLightTheme: Theme {
  let tokens: Tokens = CasaEestiloLightTokens()
  let components: Components = CasaEestiloLightComponents()
}

struct CasaEestiloLightTokens: Tokens {
  let assetFontFileDisplay = "montserrat_bold"
  let assetFontFileHeadline = "montserrat_semi_bold"
  let assetFontFileBodyRegular = "montserrat_regular"
  let assetFontFileBodyBold = "montserrat_bold"
  let assetBrandNeutralAFile = "casaeestilo-a-official"
  let assetBrandNeutralAWidth: CGFloat = 256
  let assetBrandNeutralAHeight: CGFloat = 58
  let assetBrandNeutralBFile = "casaeestilo-a-official"
  let assetBrandNeutralBWidth: CGFloat = 256
  let assetBrandNeutralBHeight: CGFloat = 58
  let assetBrandCustomAFile = "casaeestilo-a-custom"
  let assetBrandCustomAWidth: CGFloat = 256
  let assetBrandCustomAHeight: CGFloat = 58
  let assetBrandCustomBFile = "casaeestilo-a-custom"
  let assetBrandCustomBWidth: CGFloat = 256
  let assetBrandCustomBHeight: CGFloat = 58
  let borderRadiusNone: CGFloat = 0
  let borderRadiusSmall: CGFloat = 2
  let borderRadiusMedium: CGFloat = 4
  let borderRadiusLarge: CGFloat = 8
  let borderRadiusCircle: CGFloat = 999
  let colorNeutral0 = "#FFFFFF"
  let colorNeutral50 = "#FAFAFA"
  let colorNeutral100 = "#E1E1E1"
  let colorNeutral200 = "#C9C9C9"
  let colorNeutral300 = "#BDBDBD"
  let colorNeutral400 = "#A4A4A4"
  let colorNeutral500 = "#8C8C8C"
  let colorNeutral600 = "#737373"
  let colorNeutral700 = "#4E4E4E"
  let colorNeutral800 = "#363636"
  let colorNeutral900 = "#111111"
  let colorPrimitiveLightGray50 = "#FAFAFA"
  let colorPrimitiveLightGray100 = "#EEEEEE"
  let colorPrimitiveLightGray200 = "#E1E1E1"
  let colorPrimitiveLightGray300 = "#D5D5D5"
  let colorPrimitiveLightGray400 = "#C9C9C9"
  let colorPrimitiveLightGray500 = "#C3C3C3"
  let colorPrimitiveLightGray600 = "#BDBDBD"
  let colorPrimitiveLightGray700 = "#B0B0B0"
  let colorPrimitiveLightGray800 = "#A4A4A4"
  let colorPrimitiveLightGray900 = "#989898"
  let colorPrimitiveDarkGray50 = "#8C8C8C"
  let colorPrimitiveDarkGray100 = "#7F7F7F"
  let colorPrimitiveDarkGray200 = "#737373"
  let colorPrimitiveDarkGray300 = "#676767"
  let colorPrimitiveDarkGray400 = "#4E4E4E"
  let colorPrimitiveDarkGray500 = "#424242"
  let colorPrimitiveDarkGray600 = "#363636"
  let colorPrimitiveDarkGray700 = "#2A2A2A"
  let colorPrimitiveDarkGray800 = "#1D1D1D"
  let colorPrimitiveDarkGray900 = "#111111"
  let colorPrimitiveBlack = "#000000"
  let colorPrimitiveWhite = "#FFFFFF"
  let colorPrimary = "#C2488E"
  let colorOnPrimary = "#FFFFFF"
  let colorPrimaryLight = "#CC65A0"
  let colorOnPrimaryLight = "#FFFFFF"
  let colorPrimaryLightest = "#D683B2"
  let colorOnPrimaryLightest = "#FFFFFF"
  let colorPrimaryDark = "#A33C77"
  let colorOnPrimaryDark = "#FFFFFF"
  let colorPrimaryDarkest = "#843161"
  let colorOnPrimaryDarkest = "#FFFFFF"
  let colorSecondary = "#6221BD"
  let colorOnSecondary = "#FFFFFF"
  let colorSecondaryLight = "#7D51CC"
  let colorOnSecondaryLight = "#FFFFFF"
  let colorSecondaryLightest = "#9672D6"
  let colorOnSecondaryLightest = "#FFFFFF"
  let colorSecondaryDark = "#5428A3"
  let colorOnSecondaryDark = "#FFFFFF"
  let colorSecondaryDarkest = "#442184"
  let colorOnSecondaryDarkest = "#FFFFFF"
  let colorContentHighlight = "#111111"
  let colorContentHighEmphasis = "#363636"
  let colorContentMediumEmphasis = "#737373"
  let colorContentLowEmphasis = "#8C8C8C"
  let colorContentDisabled = "#A4A4A4"
  let colorContentHighlightFixedLight = "#FFFFFF"
  let colorContentHighEmphasisFixedLight = "#E1E1E1"
  let colorContentMediumEmphasisFixedLight = "#BDBDBD"
  let colorContentLowEmphasisFixedLight = "#A4A4A4"
  let colorSurface = "#FFFFFF"
  let colorSurfaceDark = "#4E4E4E"
  let colorSurfaceFixedLight = "#FFFFFF"
  let colorSurfaceFixedDark = "#4E4E4E"
  let colorSurfaceDisabled = "#A4A4A4"
  let colorOnSurface = "#363636"
  let colorOnSurfaceDark = "#FFFFFF"
  let colorOnSurfaceFixedLight = "#363636"
  let colorOnSurfaceFixedDark = "#FFFFFF"
  let colorOnSurfaceDisabled = "#363636"
  let colorBackground = "#FAFAFA"
  let colorOnBackground = "#111111"
  let colorSurfaceInverse = "#4E4E4E"
  let colorOnSurfaceInverse = "#FFFFFF"
  let colorHighlight = "#111111"
  let colorHighEmphasis = "#363636"
  let colorMediumEmphasis = "#737373"
  let colorLowEmphasis = "#8C8C8C"
  let colorLowLight = "#FFFFFF"
  let colorInfo = "#227BBD"
  let colorOnInfo = "#FFFFFF"
  let colorInfoLight = "#54A6DC"
  let colorOnInfoLight = "#111111"
  let colorInfoLightest = "#C4DFF3"
  let colorOnInfoLightest = "#111111"
  let colorInfoDark = "#1A588A"
  let colorOnInfoDark = "#FFFFFF"
  let colorInfoDarkest = "#194B73"
  let colorOnInfoDarkest = "#FFFFFF"
  let colorLink = "#227BBD"
  let colorOnLink = "#FFFFFF"
  let colorLinkLight = "#54A6DC"
  let colorOnLinkLight = "#111111"
  let colorLinkLightest = "#C4DFF3"
  let colorOnLinkLightest = "#111111"
  let colorLinkDark = "#1A588A"
  let colorOnLinkDark = "#FFFFFF"
  let colorLinkDarkest = "#194B73"
  let colorOnLinkDarkest = "#FFFFFF"
  let colorSuccess = "#569A32"
  let colorOnSuccess = "#111111"
  let colorSuccessLight = "#A0D87E"
  let colorOnSuccessLight = "#111111"
  let colorSuccessLightest = "#E1F3D4"
  let colorOnSuccessLightest = "#111111"
  let colorSuccessDark = "#386823"
  let colorOnSuccessDark = "#FFFFFF"
  let colorSuccessDarkest = "#2B4720"
  let colorOnSuccessDarkest = "#FFFFFF"
  let colorWarning = "#FCC433"
  let colorOnWarning = "#111111"
  let colorWarningLight = "#FDD265"
  let colorOnWarningLight = "#111111"
  let colorWarningLightest = "#FDE198"
  let colorOnWarningLightest = "#111111"
  let colorWarningDark = "#DEA003"
  let colorOnWarningDark = "#111111"
  let colorWarningDarkest = "#946B02"
  let colorOnWarningDarkest = "#FFFFFF"
  let colorAlert = "#E74627"
  let colorOnAlert = "#111111"
  let colorAlertLight = "#FF826A"
  let colorOnAlertLight = "#111111"
  let colorAlertLightest = "#FFD0C7"
  let colorOnAlertLightest = "#111111"
  let colorAlertDark = "#C13014"
  let colorOnAlertDark = "#FFFFFF"
  let colorAlertDarkest = "#A02B14"
  let colorOnAlertDarkest = "#FFFFFF"
  let colorNeutralLightest = "#FFFFFF"
  let colorNeutralLight = "#FAFAFA"
  let colorNeutralMedium = "#BBBBBB"
  let colorNeutralDark = "#777777"
  let colorNeutralDarkest = "#333333"
  let elevationNoneShadowColor = "nil"
  let elevationNoneShadowOffsetWidth: CGFloat = 0
  let elevationNoneShadowOffsetHeight: CGFloat = -3
  let elevationNoneShadowRadius: CGFloat = 3
  let elevationNoneShadowOpacity: Float = 0
  let elevationMicroShadowColor = "#000000"
  let elevationMicroShadowOffsetWidth: CGFloat = 0
  let elevationMicroShadowOffsetHeight: CGFloat = 1
  let elevationMicroShadowRadius: CGFloat = 1
  let elevationMicroShadowOpacity: Float = 0.14
  let elevationTinyShadowColor = "#000000"
  let elevationTinyShadowOffsetWidth: CGFloat = 0
  let elevationTinyShadowOffsetHeight: CGFloat = 2
  let elevationTinyShadowRadius: CGFloat = 2
  let elevationTinyShadowOpacity: Float = 0.14
  let elevationSmallShadowColor = "#000000"
  let elevationSmallShadowOffsetWidth: CGFloat = 0
  let elevationSmallShadowOffsetHeight: CGFloat = 3
  let elevationSmallShadowRadius: CGFloat = 4
  let elevationSmallShadowOpacity: Float = 0.14
  let elevationMediumShadowColor = "#000000"
  let elevationMediumShadowOffsetWidth: CGFloat = 0
  let elevationMediumShadowOffsetHeight: CGFloat = 4
  let elevationMediumShadowRadius: CGFloat = 5
  let elevationMediumShadowOpacity: Float = 0.14
  let elevationLargeShadowColor = "#000000"
  let elevationLargeShadowOffsetWidth: CGFloat = 0
  let elevationLargeShadowOffsetHeight: CGFloat = 6
  let elevationLargeShadowRadius: CGFloat = 10
  let elevationLargeShadowOpacity: Float = 0.14
  let elevationLargeXShadowColor = "#000000"
  let elevationLargeXShadowOffsetWidth: CGFloat = 0
  let elevationLargeXShadowOffsetHeight: CGFloat = 8
  let elevationLargeXShadowRadius: CGFloat = 10
  let elevationLargeXShadowOpacity: Float = 0.14
  let elevationLargeXXShadowColor = "#000000"
  let elevationLargeXXShadowOffsetWidth: CGFloat = 0
  let elevationLargeXXShadowOffsetHeight: CGFloat = 9
  let elevationLargeXXShadowRadius: CGFloat = 12
  let elevationLargeXXShadowOpacity: Float = 0.14
  let elevationHugeShadowColor = "#000000"
  let elevationHugeShadowOffsetWidth: CGFloat = 0
  let elevationHugeShadowOffsetHeight: CGFloat = 12
  let elevationHugeShadowRadius: CGFloat = 17
  let elevationHugeShadowOpacity: Float = 0.14
  let elevationHugeXShadowColor = "#000000"
  let elevationHugeXShadowOffsetWidth: CGFloat = 0
  let elevationHugeXShadowOffsetHeight: CGFloat = 16
  let elevationHugeXShadowRadius: CGFloat = 24
  let elevationHugeXShadowOpacity: Float = 0.14
  let elevationHugeXXShadowColor = "#000000"
  let elevationHugeXXShadowOffsetWidth: CGFloat = 0
  let elevationHugeXXShadowOffsetHeight: CGFloat = 24
  let elevationHugeXXShadowRadius: CGFloat = 38
  let elevationHugeXXShadowOpacity: Float = 0.14
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
  let opacityVeryHigh: CGFloat = 0.8
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
  let typographyFontSizeLevel1: CGFloat = 13
  let typographyFontSizeLevel2: CGFloat = 14
  let typographyFontSizeLevel3: CGFloat = 16
  let typographyFontSizeLevel4: CGFloat = 18
  let typographyFontSizeLevel5: CGFloat = 20
  let typographyFontSizeLevel6: CGFloat = 23
  let typographyFontSizeLevel7: CGFloat = 26
  let typographyFontSizeLevel8: CGFloat = 29
  let typographyFontSizeLevel9: CGFloat = 32
  let typographyFontSizeLevel10: CGFloat = 36
  let typographyFontSizeLevel11: CGFloat = 41
  let typographyFontSizeLevel12: CGFloat = 46
  let typographyFontSizeLevel13: CGFloat = 52
  let typographyFontSizeLevel14: CGFloat = 58
  let typographyFontSizeLevel15: CGFloat = 66
  let typographyFontSizeLevel16: CGFloat = 74
  let typographyFontSizeLevel17: CGFloat = 83
  let typographyLineHeightAuto: CGFloat = 1
  let typographyLineHeightReset: CGFloat = 1
  let typographyLineHeightSmall: CGFloat = 1.25
  let typographyLineHeightMedium: CGFloat = 1.5
  let typographyLineHeightLarge: CGFloat = 2
  let typographyFontFamilyPrimary = "San Francisco"
  let typographyFontFamilySecondary = "sans-serif"
  let typographyFontFamilyBranding = "Roboto"
  let typographyFontFamilyCode = "SF Mono"
  let typographyFontWeightRegular: UIFont.Weight = .regular
  let typographyFontWeightMedium: UIFont.Weight = .medium
  let typographyDisplayFontFamily = "Montserrat"
  let typographyDisplayFontWeight: UIFont.Weight = .bold
  let typographyHeadlineFontFamily = "Montserrat"
  let typographyHeadlineFontWeight: UIFont.Weight = .semibold
  let typographyBodyRegularFontFamily = "Montserrat"
  let typographyBodyRegularFontWeight: UIFont.Weight = .regular
  let typographyBodyBoldFontFamily = "Montserrat"
  let typographyBodyBoldFontWeight: UIFont.Weight = .bold
  let typographyFallbackFontFamily = "San Francisco"
  let typographyFallbackFontWeight: UIFont.Weight = .regular
}
struct CasaEestiloLightComponents: Components {
  let alertTitleFontSize: CGFloat = 20
  let alertTitleLetterSpacing: CGFloat = 0.12
  let alertTitleLineHeight: CGFloat = 1.5
  let alertTitlePrimaryFontFamily = "San Francisco"
  let alertTitlePrimaryFontWeight: UIFont.Weight = .medium
  let alertTitleFallbackFontFamily = "San Francisco"
  let alertTitleFallbackFontWeight: UIFont.Weight = .regular
  let alertContentFontSize: CGFloat = 16
  let alertContentLetterSpacing: CGFloat = 0.32
  let alertContentLineHeight: CGFloat = 1.5
  let alertContentPrimaryFontFamily = "San Francisco"
  let alertContentPrimaryFontWeight: UIFont.Weight = .regular
  let alertContentFallbackFontFamily = "San Francisco"
  let alertContentFallbackFontWeight: UIFont.Weight = .regular
  let alertBorderRadius: CGFloat = 4
  let appBarTopTitleFontSize: CGFloat = 20
  let appBarTopTitleLetterSpacing: CGFloat = 0.12
  let appBarTopTitleLineHeight: CGFloat = 1.25
  let appBarTopTitlePrimaryFontFamily = "San Francisco"
  let appBarTopTitlePrimaryFontWeight: UIFont.Weight = .medium
  let appBarTopTitleFallbackFontFamily = "San Francisco"
  let appBarTopTitleFallbackFontWeight: UIFont.Weight = .regular
  let avatarStandardFontSize: CGFloat = 12
  let avatarStandardLetterSpacing: CGFloat = 0
  let avatarStandardLineHeight: CGFloat = 1.5
  let avatarStandardBorderRadius: CGFloat = 12
  let avatarSemiFontSize: CGFloat = 14
  let avatarSemiLetterSpacing: CGFloat = 0.16
  let avatarSemiLineHeight: CGFloat = 1.5
  let avatarSemiBorderRadius: CGFloat = 16
  let avatarSemiXFontSize: CGFloat = 20
  let avatarSemiXLetterSpacing: CGFloat = 0.12
  let avatarSemiXLineHeight: CGFloat = 1.5
  let avatarSemiXBorderRadius: CGFloat = 20
  let avatarMediumFontSize: CGFloat = 24
  let avatarMediumLetterSpacing: CGFloat = 0
  let avatarMediumLineHeight: CGFloat = 1.5
  let avatarMediumBorderRadius: CGFloat = 24
  let avatarLargeXXXFontSize: CGFloat = 48
  let avatarLargeXXXLetterSpacing: CGFloat = 0
  let avatarLargeXXXLineHeight: CGFloat = 1.5
  let avatarLargeXXXBorderRadius: CGFloat = 44
  let avatarPrimaryFontFamily = "San Francisco"
  let avatarPrimaryFontWeight: UIFont.Weight = .regular
  let avatarFallbackFontFamily = "San Francisco"
  let avatarFallbackFontWeight: UIFont.Weight = .regular
  let avatarColorBackground = "#C2488E"
  let avatarColorLabel = "#FFFFFF"
  let badgeLabelFontSize: CGFloat = 12
  let badgeLabelLetterSpacing: CGFloat = 0.16
  let badgeLabelLineHeight: CGFloat = 1.5
  let badgeLabelPrimaryFontFamily = "San Francisco"
  let badgeLabelPrimaryFontWeight: UIFont.Weight = .regular
  let badgeLabelFallbackFontFamily = "San Francisco"
  let badgeLabelFallbackFontWeight: UIFont.Weight = .regular
  let badgeStandardHeight: CGFloat = 16
  let badgeStandardBorderRadius: CGFloat = 8
  let badgeDotHeight: CGFloat = 8
  let badgeDotBorderRadius: CGFloat = 4
  let badgeColorPrimaryLabel = "#FFFFFF"
  let badgeColorPrimaryBackground = "#C2488E"
  let badgeColorSecondaryLabel = "#FFFFFF"
  let badgeColorSecondaryBackground = "#6221BD"
  let badgeColorSuccessLabel = "#111111"
  let badgeColorSuccessBackground = "#569A32"
  let badgeColorAlertLabel = "#111111"
  let badgeColorAlertBackground = "#E74627"
  let buttonLabelFontSize: CGFloat = 14
  let buttonLabelLetterSpacing: CGFloat = 0.44
  let buttonLabelLineHeight: CGFloat = 1.5
  let buttonLabelPrimaryFontFamily = "San Francisco"
  let buttonLabelPrimaryFontWeight: UIFont.Weight = .medium
  let buttonLabelFallbackFontFamily = "San Francisco"
  let buttonLabelFallbackFontWeight: UIFont.Weight = .medium
  let buttonBorderRadius: CGFloat = 4
  let buttonContainedColorEnableBackground = "#C2488E"
  let buttonContainedColorEnableBorder = "#FFFFFF00"
  let buttonContainedColorEnableLabel = "#FFFFFF"
  let buttonContainedColorDisableBackground = "#8C8C8C"
  let buttonContainedColorDisableBorder = "#FFFFFF00"
  let buttonContainedColorDisableLabel = "#363636"
  let buttonContainedColorHoverBackground = "#A33C77"
  let buttonContainedColorHoverBorder = "#FFFFFF00"
  let buttonContainedColorHoverLabel = "#FFFFFF"
  let buttonContainedColorFocusBackground = "#843161"
  let buttonContainedColorFocusBorder = "#FFFFFF00"
  let buttonContainedColorFocusLabel = "#FFFFFF"
  let buttonOutlinedColorEnableBackground = "#FFFFFF00"
  let buttonOutlinedColorEnableBorder = "#C2488E"
  let buttonOutlinedColorEnableLabel = "#363636"
  let buttonOutlinedColorDisableBackground = "#FFFFFF00"
  let buttonOutlinedColorDisableBorder = "#8C8C8C"
  let buttonOutlinedColorDisableLabel = "#737373"
  let buttonOutlinedColorHoverBackground = "#E1E1E1"
  let buttonOutlinedColorHoverBorder = "#C2488E"
  let buttonOutlinedColorHoverLabel = "#363636"
  let buttonOutlinedColorFocusBackground = "#C9C9C9"
  let buttonOutlinedColorFocusBorder = "#C2488E"
  let buttonOutlinedColorFocusLabel = "#363636"
  let buttonTextColorEnableBackground = "#FFFFFF00"
  let buttonTextColorEnableBorder = "#FFFFFF00"
  let buttonTextColorEnableLabel = "#363636"
  let buttonTextColorDisableBackground = "#FFFFFF00"
  let buttonTextColorDisableBorder = "#FFFFFF00"
  let buttonTextColorDisableLabel = "#737373"
  let buttonTextColorHoverBackground = "#E1E1E1"
  let buttonTextColorHoverBorder = "#FFFFFF00"
  let buttonTextColorHoverLabel = "#363636"
  let buttonTextColorFocusBackground = "#C9C9C9"
  let buttonTextColorFocusBorder = "#FFFFFF00"
  let buttonTextColorFocusLabel = "#363636"
  let cardBorderRadiusEnable: CGFloat = 4
  let cardBorderRadiusDisable: CGFloat = 0
  let cardColorBackground = "#FFFFFF"
  let checkboxLabelFontSize: CGFloat = 14
  let checkboxLabelLetterSpacing: CGFloat = 0.16
  let checkboxLabelLineHeight: CGFloat = 1.5
  let checkboxLabelPrimaryFontFamily = "San Francisco"
  let checkboxLabelPrimaryFontWeight: UIFont.Weight = .regular
  let checkboxLabelFallbackFontFamily = "San Francisco"
  let checkboxLabelFallbackFontWeight: UIFont.Weight = .regular
  let checkboxBorderRadius: CGFloat = 2
  let counterLabelPrimaryFontFamily = "San Francisco"
  let counterLabelPrimaryFontWeight: UIFont.Weight = .medium
  let counterLabelFallbackFontFamily = "San Francisco"
  let counterLabelFallbackFontWeight: UIFont.Weight = .regular
  let counterLabelFontSize: CGFloat = 14
  let counterLabelLetterSpacing: CGFloat = 0.08
  let counterLabelLineHeight: CGFloat = 1.25
  let counterContentPrimaryFontFamily = "San Francisco"
  let counterContentPrimaryFontWeight: UIFont.Weight = .regular
  let counterContentFallbackFontFamily = "San Francisco"
  let counterContentFallbackFontWeight: UIFont.Weight = .regular
  let counterContentFontSize: CGFloat = 16
  let counterContentLetterSpacing: CGFloat = 0.32
  let counterContentLineHeight: CGFloat = 1.25
  let counterBorderRadius: CGFloat = 4
  let dialogTitleFontSize: CGFloat = 20
  let dialogTitleLetterSpacing: CGFloat = 0.12
  let dialogTitleLineHeight: CGFloat = 1.25
  let dialogTitlePrimaryFontFamily = "San Francisco"
  let dialogTitlePrimaryFontWeight: UIFont.Weight = .medium
  let dialogTitleFallbackFontFamily = "San Francisco"
  let dialogTitleFallbackFontWeight: UIFont.Weight = .regular
  let dialogBodyFontSize: CGFloat = 16
  let dialogBodyLetterSpacing: CGFloat = 0.32
  let dialogBodyLineHeight: CGFloat = 1.5
  let dialogBodyPrimaryFontFamily = "San Francisco"
  let dialogBodyPrimaryFontWeight: UIFont.Weight = .regular
  let dialogBodyFallbackFontFamily = "San Francisco"
  let dialogBodyFallbackFontWeight: UIFont.Weight = .regular
  let dialogBorderRadius: CGFloat = 4
  let dialogColorBackground = "#FFFFFF"
  let dialogColorTitle = "#111111"
  let dividerColorBackground = "#8C8C8C"
  let expansionPanelTitleFontSize: CGFloat = 16
  let expansionPanelTitleLetterSpacing: CGFloat = 0.08
  let expansionPanelTitleLineHeight: CGFloat = 1.5
  let expansionPanelTitlePrimaryFontFamily = "San Francisco"
  let expansionPanelTitlePrimaryFontWeight: UIFont.Weight = .medium
  let expansionPanelTitleFallbackFontFamily = "San Francisco"
  let expansionPanelTitleFallbackFontWeight: UIFont.Weight = .regular
  let expansionPanelBorderRadius: CGFloat = 4
  let iconButtonSemiBorderRadius: CGFloat = 16
  let iconButtonSemiXBorderRadius: CGFloat = 20
  let iconButtonMediumBorderRadius: CGFloat = 24
  let iconButtonStandardColorEnableBackground = "#FFFFFF00"
  let iconButtonStandardColorDisableBackground = "#FFFFFF00"
  let iconButtonStandardColorHoverBackground = "#E1E1E1"
  let iconButtonStandardColorFocusBackground = "#C9C9C9"
  let iconButtonFloatColorEnableBackground = "#FFFFFF"
  let iconButtonFloatColorDisableBackground = "#8C8C8C"
  let iconButtonFloatColorHoverBackground = "#E1E1E1"
  let iconButtonFloatColorFocusBackground = "#C9C9C9"
  let iconButtonOverlayColorEnableBackground = "#111111"
  let iconButtonOverlayColorDisableBackground = "#111111"
  let iconButtonOverlayColorHoverBackground = "#111111"
  let iconButtonOverlayColorFocusBackground = "#111111"
  let imageBorderRadiusMedium: CGFloat = 4
  let imageBorderRadiusNone: CGFloat = 0
  let linkLabelFontSize: CGFloat = 16
  let linkLabelLetterSpacing: CGFloat = 0.32
  let linkLabelLineHeight: CGFloat = 1.5
  let linkLabelPrimaryFontFamily = "San Francisco"
  let linkLabelPrimaryFontWeight: UIFont.Weight = .regular
  let linkLabelFallbackFontFamily = "San Francisco"
  let linkLabelFallbackFontWeight: UIFont.Weight = .regular
  let linkColorLabelEnableDefault = "#227BBD"
  let linkColorLabelEnableLight = "#8C8C8C"
  let navigationDrawerHeaderTitleFontSize: CGFloat = 20
  let navigationDrawerHeaderTitleLetterSpacing: CGFloat = 0.12
  let navigationDrawerHeaderTitleLineHeight: CGFloat = 1.25
  let navigationDrawerHeaderTitlePrimaryFontFamily = "San Francisco"
  let navigationDrawerHeaderTitlePrimaryFontWeight: UIFont.Weight = .medium
  let navigationDrawerHeaderTitleFallbackFontFamily = "San Francisco"
  let navigationDrawerHeaderTitleFallbackFontWeight: UIFont.Weight = .regular
  let navigationDrawerHeaderSubtitleFontSize: CGFloat = 14
  let navigationDrawerHeaderSubtitleLetterSpacing: CGFloat = 0.16
  let navigationDrawerHeaderSubtitleLineHeight: CGFloat = 1.5
  let navigationDrawerHeaderSubtitlePrimaryFontFamily = "San Francisco"
  let navigationDrawerHeaderSubtitlePrimaryFontWeight: UIFont.Weight = .regular
  let navigationDrawerHeaderSubtitleFallbackFontFamily = "San Francisco"
  let navigationDrawerHeaderSubtitleFallbackFontWeight: UIFont.Weight = .regular
  let navigationDrawerSectionTitleFontSize: CGFloat = 12
  let navigationDrawerSectionTitleLetterSpacing: CGFloat = 0.16
  let navigationDrawerSectionTitleLineHeight: CGFloat = 1.5
  let navigationDrawerSectionTitlePrimaryFontFamily = "San Francisco"
  let navigationDrawerSectionTitlePrimaryFontWeight: UIFont.Weight = .regular
  let navigationDrawerSectionTitleFallbackFontFamily = "San Francisco"
  let navigationDrawerSectionTitleFallbackFontWeight: UIFont.Weight = .regular
  let navigationDrawerSectionItemFontSize: CGFloat = 14
  let navigationDrawerSectionItemLetterSpacing: CGFloat = 0.16
  let navigationDrawerSectionItemLineHeight: CGFloat = 1.5
  let navigationDrawerSectionItemPrimaryFontFamily = "San Francisco"
  let navigationDrawerSectionItemPrimaryFontWeight: UIFont.Weight = .regular
  let navigationDrawerSectionItemFallbackFontFamily = "San Francisco"
  let navigationDrawerSectionItemFallbackFontWeight: UIFont.Weight = .regular
  let progressIndicatorStandardBorderRadius: CGFloat = 12
  let progressIndicatorSemiBorderRadius: CGFloat = 16
  let progressIndicatorMediumBorderRadius: CGFloat = 24
  let progressIndicatorLargeBorderRadius: CGFloat = 32
  let progressIndicatorColorStroke = "#C2488E"
  let progressIndicatorColorLayer = "#FFFFFF"
  let radioButtonLabelFontSize: CGFloat = 14
  let radioButtonLabelLetterSpacing: CGFloat = 0.16
  let radioButtonLabelLineHeight: CGFloat = 1.5
  let radioButtonLabelPrimaryFontFamily = "San Francisco"
  let radioButtonLabelPrimaryFontWeight: UIFont.Weight = .regular
  let radioButtonLabelFallbackFontFamily = "San Francisco"
  let radioButtonLabelFallbackFontWeight: UIFont.Weight = .regular
  let radioButtonBorderRadius: CGFloat = 12
  let radioButtonColorSelectBorder = "#C2488E"
  let radioButtonColorSelectContent = "#C2488E"
  let radioButtonColorUnselectBorder = "#111111"
  let radioButtonColorUnselectContent = "#111111"
  let radioButtonColorDisableBorder = "#8C8C8C"
  let radioButtonColorDisableContent = "#8C8C8C"
  let ratingCounterLabelFontSize: CGFloat = 14
  let ratingCounterLabelLetterSpacing: CGFloat = 0.16
  let ratingCounterLabelLineHeight: CGFloat = 1.5
  let ratingCounterLabelPrimaryFontFamily = "San Francisco"
  let ratingCounterLabelPrimaryFontWeight: UIFont.Weight = .regular
  let ratingCounterLabelFallbackFontFamily = "San Francisco"
  let ratingCounterLabelFallbackFontWeight: UIFont.Weight = .regular
  let ratingInputLabelFontSize: CGFloat = 12
  let ratingInputLabelLetterSpacing: CGFloat = 0.16
  let ratingInputLabelLineHeight: CGFloat = 1.5
  let ratingInputLabelPrimaryFontFamily = "San Francisco"
  let ratingInputLabelPrimaryFontWeight: UIFont.Weight = .regular
  let ratingInputLabelFallbackFontFamily = "San Francisco"
  let ratingInputLabelFallbackFontWeight: UIFont.Weight = .regular
  let shortcutLabelFontSize: CGFloat = 12
  let shortcutLabelLetterSpacing: CGFloat = 0.16
  let shortcutLabelLineHeight: CGFloat = 1.5
  let shortcutLabelPrimaryFontFamily = "San Francisco"
  let shortcutLabelPrimaryFontWeight: UIFont.Weight = .regular
  let shortcutLabelFallbackFontFamily = "San Francisco"
  let shortcutLabelFallbackFontWeight: UIFont.Weight = .regular
  let shortcutContainedColorEnablePrimaryBackground = "#C2488E"
  let shortcutContainedColorEnablePrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorEnablePrimaryLabel = "#363636"
  let shortcutContainedColorEnableNeutralBackground = "#FFFFFF"
  let shortcutContainedColorEnableNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorEnableNeutralLabel = "#363636"
  let shortcutContainedColorDisablePrimaryBackground = "#8C8C8C"
  let shortcutContainedColorDisablePrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorDisablePrimaryLabel = "#737373"
  let shortcutContainedColorDisableNeutralBackground = "#8C8C8C"
  let shortcutContainedColorDisableNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorDisableNeutralLabel = "#737373"
  let shortcutContainedColorHoverPrimaryBackground = "#A33C77"
  let shortcutContainedColorHoverPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorHoverPrimaryLabel = "#363636"
  let shortcutContainedColorHoverNeutralBackground = "#E1E1E1"
  let shortcutContainedColorHoverNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorHoverNeutralLabel = "#363636"
  let shortcutContainedColorFocusPrimaryBackground = "#843161"
  let shortcutContainedColorFocusPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorFocusPrimaryLabel = "#363636"
  let shortcutContainedColorFocusNeutralBackground = "#C9C9C9"
  let shortcutContainedColorFocusNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorFocusNeutralLabel = "#363636"
  let shortcutOutlinedColorEnablePrimaryBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnablePrimaryBorder = "#C2488E"
  let shortcutOutlinedColorEnablePrimaryLabel = "#363636"
  let shortcutOutlinedColorEnableNeutralBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnableNeutralBorder = "#8C8C8C"
  let shortcutOutlinedColorEnableNeutralLabel = "#363636"
  let shortcutOutlinedColorDisablePrimaryBackground = "#FFFFFF"
  let shortcutOutlinedColorDisablePrimaryBorder = "#8C8C8C"
  let shortcutOutlinedColorDisablePrimaryLabel = "#8C8C8C"
  let shortcutOutlinedColorDisableNeutralBackground = "#FFFFFF"
  let shortcutOutlinedColorDisableNeutralBorder = "#8C8C8C"
  let shortcutOutlinedColorDisableNeutralLabel = "#8C8C8C"
  let shortcutOutlinedColorHoverPrimaryBackground = "#E1E1E1"
  let shortcutOutlinedColorHoverPrimaryBorder = "#A33C77"
  let shortcutOutlinedColorHoverPrimaryLabel = "#363636"
  let shortcutOutlinedColorHoverNeutralBackground = "#E1E1E1"
  let shortcutOutlinedColorHoverNeutralBorder = "#737373"
  let shortcutOutlinedColorHoverNeutralLabel = "#363636"
  let shortcutOutlinedColorFocusPrimaryBackground = "#C9C9C9"
  let shortcutOutlinedColorFocusPrimaryBorder = "#A33C77"
  let shortcutOutlinedColorFocusPrimaryLabel = "#363636"
  let shortcutOutlinedColorFocusNeutralBackground = "#C9C9C9"
  let shortcutOutlinedColorFocusNeutralBorder = "#737373"
  let shortcutOutlinedColorFocusNeutralLabel = "#363636"
  let shortcutBorderRadius: CGFloat = 28
  let snackbarContentFontSize: CGFloat = 14
  let snackbarContentLetterSpacing: CGFloat = 0.16
  let snackbarContentLineHeight: CGFloat = 1.5
  let snackbarContentPrimaryFontFamily = "San Francisco"
  let snackbarContentPrimaryFontWeight: UIFont.Weight = .regular
  let snackbarContentFallbackFontFamily = "San Francisco"
  let snackbarContentFallbackFontWeight: UIFont.Weight = .regular
  let snackbarBorderRadius: CGFloat = 4
  let tabLabelFontSize: CGFloat = 14
  let tabLabelLetterSpacing: CGFloat = 0.44
  let tabLabelLineHeight: CGFloat = 1.5
  let tabLabelPrimaryFontFamily = "San Francisco"
  let tabLabelPrimaryFontWeight: UIFont.Weight = .medium
  let tabLabelFallbackFontFamily = "San Francisco"
  let tabLabelFallbackFontWeight: UIFont.Weight = .regular
  let tagLabelFontSize: CGFloat = 12
  let tagLabelLetterSpacing: CGFloat = 0.16
  let tagLabelLineHeight: CGFloat = 1.25
  let tagLabelPrimaryFontFamily = "San Francisco"
  let tagLabelPrimaryFontWeight: UIFont.Weight = .regular
  let tagLabelFallbackFontFamily = "San Francisco"
  let tagLabelFallbackFontWeight: UIFont.Weight = .regular
  let tagSmallBorderRadiusEnable: CGFloat = 8
  let tagSmallBorderRadiusDisable: CGFloat = 0
  let tagStandardBorderRadiusEnable: CGFloat = 12
  let tagStandardBorderRadiusDisable: CGFloat = 0
  let tagColorBackgroundPrimary = "#C2488E"
  let tagColorBackgroundSecondary = "#6221BD"
  let tagColorBackgroundSuccess = "#569A32"
  let tagColorBackgroundAlert = "#E74627"
  let tagColorBackgroundWarning = "#FCC433"
  let tagColorBackgroundLink = "#227BBD"
  let tagColorLabelPrimary = "#FFFFFF"
  let tagColorLabelSecondary = "#FFFFFF"
  let tagColorLabelSuccess = "#111111"
  let tagColorLabelAlert = "#111111"
  let tagColorLabelWarning = "#111111"
  let tagColorLabelLink = "#FFFFFF"
  let textFieldLabelPrimaryFontFamily = "San Francisco"
  let textFieldLabelPrimaryFontWeight: UIFont.Weight = .medium
  let textFieldLabelFallbackFontFamily = "San Francisco"
  let textFieldLabelFallbackFontWeight: UIFont.Weight = .regular
  let textFieldLabelFontSize: CGFloat = 14
  let textFieldLabelLetterSpacing: CGFloat = 0.08
  let textFieldLabelLineHeight: CGFloat = 1.5
  let textFieldContentPrimaryFontFamily = "San Francisco"
  let textFieldContentPrimaryFontWeight: UIFont.Weight = .regular
  let textFieldContentFallbackFontFamily = "San Francisco"
  let textFieldContentFallbackFontWeight: UIFont.Weight = .regular
  let textFieldContentFontSize: CGFloat = 16
  let textFieldContentLetterSpacing: CGFloat = 0.32
  let textFieldContentLineHeight: CGFloat = 1.25
  let textFieldHelperTextPrimaryFontFamily = "San Francisco"
  let textFieldHelperTextPrimaryFontWeight: UIFont.Weight = .regular
  let textFieldHelperTextFallbackFontFamily = "San Francisco"
  let textFieldHelperTextFallbackFontWeight: UIFont.Weight = .regular
  let textFieldHelperTextFontSize: CGFloat = 12
  let textFieldHelperTextLetterSpacing: CGFloat = 0.16
  let textFieldHelperTextLineHeight: CGFloat = 1.25
  let textFieldBorderRadius: CGFloat = 4
  let heading1FontSize: CGFloat = 96
  let heading1FontWeight: UIFont.Weight = .regular
  let heading1LineHeight: CGFloat = 1.5
  let heading1LetterSpacing: CGFloat = 0
  let heading2FontSize: CGFloat = 64
  let heading2FontWeight: UIFont.Weight = .regular
  let heading2LineHeight: CGFloat = 1.5
  let heading2LetterSpacing: CGFloat = 0
  let heading3FontSize: CGFloat = 48
  let heading3FontWeight: UIFont.Weight = .regular
  let heading3LineHeight: CGFloat = 1.5
  let heading3LetterSpacing: CGFloat = 0
  let heading4FontSize: CGFloat = 32
  let heading4FontWeight: UIFont.Weight = .regular
  let heading4LineHeight: CGFloat = 1.5
  let heading4LetterSpacing: CGFloat = 0.08
  let heading5FontSize: CGFloat = 24
  let heading5FontWeight: UIFont.Weight = .regular
  let heading5LineHeight: CGFloat = 1.5
  let heading5LetterSpacing: CGFloat = 0
  let heading6FontSize: CGFloat = 20
  let heading6FontWeight: UIFont.Weight = .medium
  let heading6LineHeight: CGFloat = 1.5
  let heading6LetterSpacing: CGFloat = 0.12
  let subtitle1FontSize: CGFloat = 16
  let subtitle1FontWeight: UIFont.Weight = .medium
  let subtitle1LineHeight: CGFloat = 1.5
  let subtitle1LetterSpacing: CGFloat = 0.08
  let subtitle2FontSize: CGFloat = 14
  let subtitle2FontWeight: UIFont.Weight = .medium
  let subtitle2LineHeight: CGFloat = 1.5
  let subtitle2LetterSpacing: CGFloat = 0.08
  let body1FontSize: CGFloat = 16
  let body1FontWeight: UIFont.Weight = .regular
  let body1LineHeight: CGFloat = 1.5
  let body1LetterSpacing: CGFloat = 0.32
  let body2FontSize: CGFloat = 14
  let body2FontWeight: UIFont.Weight = .regular
  let body2LineHeight: CGFloat = 1.5
  let body2LetterSpacing: CGFloat = 0.16
  let captionFontSize: CGFloat = 12
  let captionFontWeight: UIFont.Weight = .regular
  let captionLineHeight: CGFloat = 1.5
  let captionLetterSpacing: CGFloat = 0.16
  let overlineFontSize: CGFloat = 12
  let overlineFontWeight: UIFont.Weight = .medium
  let overlineLineHeight: CGFloat = 1.5
  let overlineLetterSpacing: CGFloat = 0.8
}
