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
 *  v0.71.0
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

struct NatdsTestDarkTheme: Theme {
  let tokens: Tokens = NatdsTestDarkTokens()
  let components: Components = NatdsTestDarkComponents()
}

struct NatdsTestDarkTokens: Tokens {
  let assetFontFileDisplay = "montserrat_bold"
  let assetFontFileHeadline = "montserrat_semi_bold"
  let assetFontFileBodyRegular = "montserrat_regular"
  let assetFontFileBodyBold = "montserrat_bold"
  let assetBrandNeutralAFile = "avon-a-official-dark"
  let assetBrandNeutralAWidth: CGFloat = 256
  let assetBrandNeutralAHeight: CGFloat = 58
  let assetBrandNeutralBFile = "avon-a-official-dark"
  let assetBrandNeutralBWidth: CGFloat = 256
  let assetBrandNeutralBHeight: CGFloat = 58
  let assetBrandCustomAFile = "avon-a-custom"
  let assetBrandCustomAWidth: CGFloat = 256
  let assetBrandCustomAHeight: CGFloat = 58
  let assetBrandCustomBFile = "avon-a-custom"
  let assetBrandCustomBWidth: CGFloat = 256
  let assetBrandCustomBHeight: CGFloat = 58
  let borderRadiusNone: CGFloat = 0
  let borderRadiusSmall: CGFloat = 2
  let borderRadiusMedium: CGFloat = 4
  let borderRadiusLarge: CGFloat = 8
  let borderRadiusCircle: CGFloat = 999
  let colorNeutral0 = "#111111"
  let colorNeutral50 = "#363636"
  let colorNeutral100 = "#4E4E4E"
  let colorNeutral200 = "#737373"
  let colorNeutral300 = "#8C8C8C"
  let colorNeutral400 = "#A4A4A4"
  let colorNeutral500 = "#BDBDBD"
  let colorNeutral600 = "#C9C9C9"
  let colorNeutral700 = "#E1E1E1"
  let colorNeutral800 = "#FAFAFA"
  let colorNeutral900 = "#FFFFFF"
  let colorPrimary = "#BE9AE2"
  let colorOnPrimary = "#000000"
  let colorPrimaryLight = "#F1CBFF"
  let colorOnPrimaryLight = "#000000"
  let colorPrimaryLightest = "#442184"
  let colorOnPrimaryLightest = "#000000"
  let colorPrimaryDark = "#8D6BB0"
  let colorOnPrimaryDark = "#000000"
  let colorPrimaryDarkest = "#9672D6"
  let colorOnPrimaryDarkest = "#000000"
  let colorSecondary = "#F593C4"
  let colorOnSecondary = "#000000"
  let colorSecondaryLight = "#FFC5F7"
  let colorOnSecondaryLight = "#000000"
  let colorSecondaryDark = "#C16394"
  let colorOnSecondaryDark = "#000000"
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
struct NatdsTestDarkComponents: Components {
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
  let avatarColorBackground = "#BE9AE2"
  let avatarColorLabel = "#000000"
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
  let badgeColorPrimaryLabel = "#000000"
  let badgeColorPrimaryBackground = "#BE9AE2"
  let badgeColorSecondaryLabel = "#000000"
  let badgeColorSecondaryBackground = "#F593C4"
  let badgeColorSuccessLabel = "#FFFFFF"
  let badgeColorSuccessBackground = "#569A32"
  let badgeColorAlertLabel = "#FFFFFF"
  let badgeColorAlertBackground = "#E74627"
  let buttonLabelFontSize: CGFloat = 14
  let buttonLabelLetterSpacing: CGFloat = 0.44
  let buttonLabelLineHeight: CGFloat = 1.5
  let buttonLabelPrimaryFontFamily = "San Francisco"
  let buttonLabelPrimaryFontWeight: UIFont.Weight = .medium
  let buttonLabelFallbackFontFamily = "San Francisco"
  let buttonLabelFallbackFontWeight: UIFont.Weight = .medium
  let buttonBorderRadius: CGFloat = 0
  let buttonContainedColorEnableBackground = "#BE9AE2"
  let buttonContainedColorEnableBorder = "#FFFFFF00"
  let buttonContainedColorEnableLabel = "#000000"
  let buttonContainedColorDisableBackground = "#777777"
  let buttonContainedColorDisableBorder = "#FFFFFF00"
  let buttonContainedColorDisableLabel = "#FAFAFA"
  let buttonContainedColorHoverBackground = "#8D6BB0"
  let buttonContainedColorHoverBorder = "#FFFFFF00"
  let buttonContainedColorHoverLabel = "#000000"
  let buttonContainedColorFocusBackground = "#9672D6"
  let buttonContainedColorFocusBorder = "#FFFFFF00"
  let buttonContainedColorFocusLabel = "#000000"
  let buttonOutlinedColorEnableBackground = "#FFFFFF00"
  let buttonOutlinedColorEnableBorder = "#BE9AE2"
  let buttonOutlinedColorEnableLabel = "#FAFAFA"
  let buttonOutlinedColorDisableBackground = "#FFFFFF00"
  let buttonOutlinedColorDisableBorder = "#777777"
  let buttonOutlinedColorDisableLabel = "#BBBBBB"
  let buttonOutlinedColorHoverBackground = "#4E4E4E"
  let buttonOutlinedColorHoverBorder = "#BE9AE2"
  let buttonOutlinedColorHoverLabel = "#FAFAFA"
  let buttonOutlinedColorFocusBackground = "#737373"
  let buttonOutlinedColorFocusBorder = "#BE9AE2"
  let buttonOutlinedColorFocusLabel = "#FAFAFA"
  let buttonTextColorEnableBackground = "#FFFFFF00"
  let buttonTextColorEnableBorder = "#FFFFFF00"
  let buttonTextColorEnableLabel = "#FAFAFA"
  let buttonTextColorDisableBackground = "#FFFFFF00"
  let buttonTextColorDisableBorder = "#FFFFFF00"
  let buttonTextColorDisableLabel = "#BBBBBB"
  let buttonTextColorHoverBackground = "#4E4E4E"
  let buttonTextColorHoverBorder = "#FFFFFF00"
  let buttonTextColorHoverLabel = "#FAFAFA"
  let buttonTextColorFocusBackground = "#737373"
  let buttonTextColorFocusBorder = "#FFFFFF00"
  let buttonTextColorFocusLabel = "#FAFAFA"
  let cardBorderRadiusEnable: CGFloat = 4
  let cardBorderRadiusDisable: CGFloat = 0
  let cardColorBackground = "#333333"
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
  let dialogColorBackground = "#333333"
  let dialogColorTitle = "#FFFFFF"
  let dividerColorBackground = "#777777"
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
  let iconButtonStandardColorHoverBackground = "#4E4E4E"
  let iconButtonStandardColorFocusBackground = "#737373"
  let iconButtonFloatColorEnableBackground = "#333333"
  let iconButtonFloatColorDisableBackground = "#777777"
  let iconButtonFloatColorHoverBackground = "#4E4E4E"
  let iconButtonFloatColorFocusBackground = "#737373"
  let iconButtonOverlayColorEnableBackground = "#FFFFFF"
  let iconButtonOverlayColorDisableBackground = "#FFFFFF"
  let iconButtonOverlayColorHoverBackground = "#FFFFFF"
  let iconButtonOverlayColorFocusBackground = "#FFFFFF"
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
  let linkColorLabelEnableLight = "#777777"
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
  let progressIndicatorColorStroke = "#BE9AE2"
  let progressIndicatorColorLayer = "#333333"
  let radioButtonLabelFontSize: CGFloat = 14
  let radioButtonLabelLetterSpacing: CGFloat = 0.16
  let radioButtonLabelLineHeight: CGFloat = 1.5
  let radioButtonLabelPrimaryFontFamily = "San Francisco"
  let radioButtonLabelPrimaryFontWeight: UIFont.Weight = .regular
  let radioButtonLabelFallbackFontFamily = "San Francisco"
  let radioButtonLabelFallbackFontWeight: UIFont.Weight = .regular
  let radioButtonBorderRadius: CGFloat = 12
  let radioButtonColorSelectBorder = "#BE9AE2"
  let radioButtonColorSelectContent = "#BE9AE2"
  let radioButtonColorUnselectBorder = "#FFFFFF"
  let radioButtonColorUnselectContent = "#FFFFFF"
  let radioButtonColorDisableBorder = "#777777"
  let radioButtonColorDisableContent = "#777777"
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
  let shortcutContainedColorEnablePrimaryBackground = "#BE9AE2"
  let shortcutContainedColorEnablePrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorEnablePrimaryLabel = "#FAFAFA"
  let shortcutContainedColorEnableNeutralBackground = "#333333"
  let shortcutContainedColorEnableNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorEnableNeutralLabel = "#FAFAFA"
  let shortcutContainedColorDisablePrimaryBackground = "#777777"
  let shortcutContainedColorDisablePrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorDisablePrimaryLabel = "#BBBBBB"
  let shortcutContainedColorDisableNeutralBackground = "#777777"
  let shortcutContainedColorDisableNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorDisableNeutralLabel = "#BBBBBB"
  let shortcutContainedColorHoverPrimaryBackground = "#8D6BB0"
  let shortcutContainedColorHoverPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorHoverNeutralBackground = "#4E4E4E"
  let shortcutContainedColorHoverNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutContainedColorFocusPrimaryBackground = "#9672D6"
  let shortcutContainedColorFocusPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorFocusPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorFocusNeutralBackground = "#737373"
  let shortcutContainedColorFocusNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorFocusNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorEnablePrimaryBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnablePrimaryBorder = "#BE9AE2"
  let shortcutOutlinedColorEnablePrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorEnableNeutralBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnableNeutralBorder = "#777777"
  let shortcutOutlinedColorEnableNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorDisablePrimaryBackground = "#333333"
  let shortcutOutlinedColorDisablePrimaryBorder = "#777777"
  let shortcutOutlinedColorDisablePrimaryLabel = "#777777"
  let shortcutOutlinedColorDisableNeutralBackground = "#333333"
  let shortcutOutlinedColorDisableNeutralBorder = "#777777"
  let shortcutOutlinedColorDisableNeutralLabel = "#777777"
  let shortcutOutlinedColorHoverPrimaryBackground = "#4E4E4E"
  let shortcutOutlinedColorHoverPrimaryBorder = "#8D6BB0"
  let shortcutOutlinedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorHoverNeutralBackground = "#4E4E4E"
  let shortcutOutlinedColorHoverNeutralBorder = "#BBBBBB"
  let shortcutOutlinedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorFocusPrimaryBackground = "#737373"
  let shortcutOutlinedColorFocusPrimaryBorder = "#8D6BB0"
  let shortcutOutlinedColorFocusPrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorFocusNeutralBackground = "#737373"
  let shortcutOutlinedColorFocusNeutralBorder = "#BBBBBB"
  let shortcutOutlinedColorFocusNeutralLabel = "#FAFAFA"
  let shortcutBorderRadius: CGFloat = 0
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
  let tagColorBackgroundPrimary = "#BE9AE2"
  let tagColorBackgroundSecondary = "#F593C4"
  let tagColorBackgroundSuccess = "#569A32"
  let tagColorBackgroundAlert = "#E74627"
  let tagColorBackgroundWarning = "#FCC433"
  let tagColorBackgroundLink = "#227BBD"
  let tagColorLabelPrimary = "#000000"
  let tagColorLabelSecondary = "#000000"
  let tagColorLabelSuccess = "#FFFFFF"
  let tagColorLabelAlert = "#FFFFFF"
  let tagColorLabelWarning = "#333333"
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
  let privateBorderRadiusCircleNone: CGFloat = 0
  let privateBorderRadiusCircleMicro: CGFloat = 2
  let privateBorderRadiusCircleTiny: CGFloat = 4
  let privateBorderRadiusCircleSmall: CGFloat = 8
  let privateBorderRadiusCircleStandard: CGFloat = 12
  let privateBorderRadiusCircleSemi: CGFloat = 16
  let privateBorderRadiusCircleSemiX: CGFloat = 20
  let privateBorderRadiusCircleMedium: CGFloat = 24
  let privateBorderRadiusCircleMediumX: CGFloat = 28
  let privateBorderRadiusCircleLarge: CGFloat = 32
  let privateBorderRadiusCircleLargeX: CGFloat = 36
  let privateBorderRadiusCircleLargeXX: CGFloat = 40
  let privateBorderRadiusCircleLargeXXX: CGFloat = 44
  let privateBorderRadiusCircleHuge: CGFloat = 48
  let privateBorderRadiusCircleHugeX: CGFloat = 64
  let privateBorderRadiusCircleHugeXX: CGFloat = 72
  let privateBorderRadiusCircleHugeXXX: CGFloat = 96
  let privateBorderRadiusCircleVeryHuge: CGFloat = 128
  let privateButtonBorderRadius: CGFloat = 0
  let privateShortcutBorderRadius: CGFloat = 0
  let spectrumDark = "#000000"
  let spectrumLight = "#ffffff"
  let spectrumPink50 = "#fff0f6"
  let spectrumPink100 = "#ffdeeb"
  let spectrumPink200 = "#fcc2d7"
  let spectrumPink300 = "#faa2c1"
  let spectrumPink400 = "#f783ac"
  let spectrumPink500 = "#f06595"
  let spectrumPink600 = "#e64980"
  let spectrumPink700 = "#d6336c"
  let spectrumPink800 = "#c2255c"
  let spectrumPink900 = "#a61e4d"
  let spectrumGrape50 = "#f8f0fc"
  let spectrumGrape100 = "#f3d9fa"
  let spectrumGrape200 = "#eebefa"
  let spectrumGrape300 = "#e599f7"
  let spectrumGrape400 = "#da77f2"
  let spectrumGrape500 = "#cc5de8"
  let spectrumGrape600 = "#be4bdb"
  let spectrumGrape700 = "#ae3ec9"
  let spectrumGrape800 = "#9c36b5"
  let spectrumGrape900 = "#862e9c"
  let spectrumViolet50 = "#f3f0ff"
  let spectrumViolet100 = "#e5dbff"
  let spectrumViolet200 = "#d0bfff"
  let spectrumViolet300 = "#b197fc"
  let spectrumViolet400 = "#9775fa"
  let spectrumViolet500 = "#845ef7"
  let spectrumViolet600 = "#7950f2"
  let spectrumViolet700 = "#7048e8"
  let spectrumViolet800 = "#6741d9"
  let spectrumViolet900 = "#5f3dc4"
  let spectrumIndigo50 = "#edf2ff"
  let spectrumIndigo100 = "#dbe4ff"
  let spectrumIndigo200 = "#bac8ff"
  let spectrumIndigo300 = "#91a7ff"
  let spectrumIndigo400 = "#748ffc"
  let spectrumIndigo500 = "#5c7cfa"
  let spectrumIndigo600 = "#4c6ef5"
  let spectrumIndigo700 = "#4263eb"
  let spectrumIndigo800 = "#3b5bdb"
  let spectrumIndigo900 = "#364fc7"
  let spectrumBlue50 = "#e7f5ff"
  let spectrumBlue100 = "#d0ebff"
  let spectrumBlue200 = "#a5d8ff"
  let spectrumBlue300 = "#74c0fc"
  let spectrumBlue400 = "#4dabf7"
  let spectrumBlue500 = "#339af0"
  let spectrumBlue600 = "#228be6"
  let spectrumBlue700 = "#1c7ed6"
  let spectrumBlue800 = "#1971c2"
  let spectrumBlue900 = "#1864ab"
  let spectrumCyan50 = "#e3fafc"
  let spectrumCyan100 = "#c5f6fa"
  let spectrumCyan200 = "#99e9f2"
  let spectrumCyan300 = "#66d9e8"
  let spectrumCyan400 = "#3bc9db"
  let spectrumCyan500 = "#22b8cf"
  let spectrumCyan600 = "#15aabf"
  let spectrumCyan700 = "#1098ad"
  let spectrumCyan800 = "#0c8599"
  let spectrumCyan900 = "#0b7285"
  let spectrumTeal50 = "#e6fcf5"
  let spectrumTeal100 = "#c3fae8"
  let spectrumTeal200 = "#96f2d7"
  let spectrumTeal300 = "#63e6be"
  let spectrumTeal400 = "#38d9a9"
  let spectrumTeal500 = "#20c997"
  let spectrumTeal600 = "#12b886"
  let spectrumTeal700 = "#0ca678"
  let spectrumTeal800 = "#099268"
  let spectrumTeal900 = "#087f5b"
  let spectrumGreen50 = "#ebfbee"
  let spectrumGreen100 = "#d3f9d8"
  let spectrumGreen200 = "#b2f2bb"
  let spectrumGreen300 = "#8ce99a"
  let spectrumGreen400 = "#69db7c"
  let spectrumGreen500 = "#51cf66"
  let spectrumGreen600 = "#40c057"
  let spectrumGreen700 = "#37b24d"
  let spectrumGreen800 = "#2f9e44"
  let spectrumGreen900 = "#2b8a3e"
  let spectrumLime50 = "#f4fce3"
  let spectrumLime100 = "#e9fac8"
  let spectrumLime200 = "#d8f5a2"
  let spectrumLime300 = "#c0eb75"
  let spectrumLime400 = "#a9e34b"
  let spectrumLime500 = "#94d82d"
  let spectrumLime600 = "#82c91e"
  let spectrumLime700 = "#74b816"
  let spectrumLime800 = "#66a80f"
  let spectrumLime900 = "#5c940d"
  let spectrumYellow50 = "#fff9db"
  let spectrumYellow100 = "#fff3bf"
  let spectrumYellow200 = "#ffec99"
  let spectrumYellow300 = "#ffe066"
  let spectrumYellow400 = "#ffd43b"
  let spectrumYellow500 = "#fcc419"
  let spectrumYellow600 = "#fab005"
  let spectrumYellow700 = "#f59f00"
  let spectrumYellow800 = "#f08c00"
  let spectrumYellow900 = "#e67700"
  let spectrumOrange50 = "#fff4e6"
  let spectrumOrange100 = "#ffe8cc"
  let spectrumOrange200 = "#ffd8a8"
  let spectrumOrange300 = "#ffc078"
  let spectrumOrange400 = "#ffa94d"
  let spectrumOrange500 = "#ff922b"
  let spectrumOrange600 = "#fd7e14"
  let spectrumOrange700 = "#f76707"
  let spectrumOrange800 = "#e8590c"
  let spectrumOrange900 = "#d9480f"
  let spectrumColorBrandALightest = "#9672D6"
  let spectrumColorBrandALight = "#7D51CC"
  let spectrumColorBrandAMain = "#6430C2"
  let spectrumColorBrandADark = "#5428A3"
  let spectrumColorBrandADarkest = "#442184"
  let spectrumColorBrandBLightest = "#D683B2"
  let spectrumColorBrandBLight = "#CC65A0"
  let spectrumColorBrandBMain = "#C2488E"
  let spectrumColorBrandBDark = "#A33C77"
  let spectrumColorBrandBDarkest = "#843161"
  let spectrumColorBrandCLightest = "#525252"
  let spectrumColorBrandCLight = "#292929"
  let spectrumColorBrandCMain = "#000000"
  let spectrumColorBrandCDark = "#000000"
  let spectrumColorBrandCDarkest = "#000000"
  let spectrumColorBrandGradientPrimaryType = "linear"
  let spectrumColorBrandGradientPrimaryAngle = 101
  let spectrumColorBrandGradientPrimaryStart = "#6430C2"
  let spectrumColorBrandGradientPrimaryEnd = "#C2488E"
  let spectrumGray50 = "#f8f9fa"
  let spectrumGray100 = "#f1f3f5"
  let spectrumGray200 = "#e9ecef"
  let spectrumGray300 = "#dee2e6"
  let spectrumGray400 = "#ced4da"
  let spectrumGray500 = "#adb5bd"
  let spectrumGray600 = "#868e96"
  let spectrumGray700 = "#495057"
  let spectrumGray800 = "#343a40"
  let spectrumGray900 = "#212529"
  let spectrumRed50 = "#fff5f5"
  let spectrumRed100 = "#ffe3e3"
  let spectrumRed200 = "#ffc9c9"
  let spectrumRed300 = "#ffa8a8"
  let spectrumRed400 = "#ff8787"
  let spectrumRed500 = "#ff6b6b"
  let spectrumRed600 = "#fa5252"
  let spectrumRed700 = "#f03e3e"
  let spectrumRed800 = "#e03131"
  let spectrumRed900 = "#c92a2a"
  let platformButtonLetterSpacing: CGFloat = 0.44
  let platformTypographyFontFamilyPrimary = "San Francisco"
  let platformTypographyFontFamilyCode = "SF Mono"
  let platformTypographyFallbackFontFamily = "San Francisco"
  let platformTypographyFallbackFontWeight: UIFont.Weight = .regular
  let platformHeading1LetterSpacing: CGFloat = 0
  let platformHeading2LetterSpacing: CGFloat = 0
  let platformHeading3LetterSpacing: CGFloat = 0
  let platformHeading4LetterSpacing: CGFloat = 0.08
  let platformHeading5LetterSpacing: CGFloat = 0
  let platformHeading6LetterSpacing: CGFloat = 0.12
  let platformSubtitle1LetterSpacing: CGFloat = 0.08
  let platformSubtitle2LetterSpacing: CGFloat = 0.08
  let platformBody1LetterSpacing: CGFloat = 0.32
  let platformBody2LetterSpacing: CGFloat = 0.16
  let platformCaptionLetterSpacing: CGFloat = 0.16
  let platformOverlineLetterSpacing: CGFloat = 0.8
}
