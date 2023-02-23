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
 *  v0.45.1
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

struct Natura_v2DarkTheme: Theme {
  let tokens: Tokens = Natura_v2DarkTokens()
  let components: Components = Natura_v2DarkComponents()
}

struct Natura_v2DarkTokens: Tokens {
  let assetFontFileDisplay = "helvetica_now_display_bd"
  let assetFontFileHeadline = "helvetica_now_display_md"
  let assetFontFileBodyRegular = "helvetica_now_display_regular"
  let assetFontFileBodyBold = "helvetica_now_display_bd"
  let assetBrandNeutralAFile = "natura-a-official-dark"
  let assetBrandNeutralAWidth: CGFloat = 256
  let assetBrandNeutralAHeight: CGFloat = 55
  let assetBrandNeutralBFile = "natura-b-official-dark"
  let assetBrandNeutralBWidth: CGFloat = 256
  let assetBrandNeutralBHeight: CGFloat = 192
  let assetBrandCustomAFile = "natura-a-custom"
  let assetBrandCustomAWidth: CGFloat = 256
  let assetBrandCustomAHeight: CGFloat = 55
  let assetBrandCustomBFile = "natura-b-custom"
  let assetBrandCustomBWidth: CGFloat = 256
  let assetBrandCustomBHeight: CGFloat = 192
  let borderRadiusNone: CGFloat = 0
  let borderRadiusSmall: CGFloat = 2
  let borderRadiusMedium: CGFloat = 4
  let borderRadiusLarge: CGFloat = 8
  let colorNeutral50 = "#212529"
  let colorNeutral100 = "#343a40"
  let colorNeutral200 = "#495057"
  let colorNeutral300 = "#868e96"
  let colorNeutral400 = "#adb5bd"
  let colorNeutral500 = "#ced4da"
  let colorNeutral600 = "#dee2e6"
  let colorNeutral700 = "#e9ecef"
  let colorNeutral800 = "#f1f3f5"
  let colorNeutral900 = "#f8f9fa"
  let colorPrimary = "#EB6619"
  let colorOnPrimary = "#FFFFFF"
  let colorPrimaryLight = "#F29966"
  let colorOnPrimaryLight = "#000000"
  let colorPrimaryLightest = "#F8CCB2"
  let colorOnPrimaryLightest = "#000000"
  let colorPrimaryDark = "#A0430E"
  let colorOnPrimaryDark = "#FFFFFF"
  let colorPrimaryDarkest = "#502207"
  let colorOnPrimaryDarkest = "#FFFFFF"
  let colorSecondary = "#263F30"
  let colorOnSecondary = "#FFFFFF"
  let colorSecondaryLight = "#599471"
  let colorOnSecondaryLight = "#FFFFFF"
  let colorSecondaryLightest = "#AACCB7"
  let colorOnSecondaryLightest = "#000000"
  let colorSecondaryDark = "#192A20"
  let colorOnSecondaryDark = "#FFFFFF"
  let colorSecondaryDarkest = "#0D1510"
  let colorOnSecondaryDarkest = "#FFFFFF"
  let colorBackground = "#121212"
  let colorOnBackground = "#FFFFFF"
  let colorSurface = "#333333"
  let colorOnSurface = "#FFFFFF"
  let colorHighlight = "#FFFFFF"
  let colorHighEmphasis = "#FAFAFA"
  let colorMediumEmphasis = "#BBBBBB"
  let colorLowEmphasis = "#777777"
  let colorLink = "#86D6FB"
  let colorOnLink = "#000000"
  let colorSuccess = "#BCDEA2"
  let colorOnSuccess = "#000000"
  let colorWarning = "#FEF59E"
  let colorOnWarning = "#000000"
  let colorAlert = "#FFAA96"
  let colorOnAlert = "#000000"
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
  let typographyDisplayFontFamily = "Helvetica Now Display"
  let typographyDisplayFontWeight: UIFont.Weight = .bold
  let typographyHeadlineFontFamily = "Helvetica Now Display"
  let typographyHeadlineFontWeight: UIFont.Weight = .medium
  let typographyBodyRegularFontFamily = "Helvetica Now Display"
  let typographyBodyRegularFontWeight: UIFont.Weight = .regular
  let typographyBodyBoldFontFamily = "Helvetica Now Display"
  let typographyBodyBoldFontWeight: UIFont.Weight = .bold
  let typographyFallbackFontFamily = "San Francisco"
  let typographyFallbackFontWeight: UIFont.Weight = .regular
}
struct Natura_v2DarkComponents: Components {
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
  let avatarColorBackground = "#EB6619"
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
  let badgeColorPrimaryBackground = "#EB6619"
  let badgeColorSecondaryLabel = "#FFFFFF"
  let badgeColorSecondaryBackground = "#263F30"
  let badgeColorSuccessLabel = "#000000"
  let badgeColorSuccessBackground = "#BCDEA2"
  let badgeColorAlertLabel = "#000000"
  let badgeColorAlertBackground = "#FFAA96"
  let buttonLabelFontSize: CGFloat = 14
  let buttonLabelLetterSpacing: CGFloat = 0.44
  let buttonLabelLineHeight: CGFloat = 1.5
  let buttonLabelPrimaryFontFamily = "San Francisco"
  let buttonLabelPrimaryFontWeight: UIFont.Weight = .medium
  let buttonLabelFallbackFontFamily = "San Francisco"
  let buttonLabelFallbackFontWeight: UIFont.Weight = .medium
  let buttonBorderRadius: CGFloat = 4
  let buttonContainedColorEnableBackground = "#EB6619"
  let buttonContainedColorEnableBorder = "#FFFFFF00"
  let buttonContainedColorEnableLabel = "#FFFFFF"
  let buttonContainedColorDisableBackground = "#777777"
  let buttonContainedColorDisableBorder = "#FFFFFF00"
  let buttonContainedColorDisableLabel = "#FAFAFA"
  let buttonContainedColorHoverBackground = "#A0430E"
  let buttonContainedColorHoverBorder = "#FFFFFF00"
  let buttonContainedColorHoverLabel = "#FFFFFF"
  let buttonContainedColorFocusBackground = "#502207"
  let buttonContainedColorFocusBorder = "#FFFFFF00"
  let buttonContainedColorFocusLabel = "#FFFFFF"
  let buttonOutlinedColorEnableBackground = "#FFFFFF00"
  let buttonOutlinedColorEnableBorder = "#EB6619"
  let buttonOutlinedColorEnableLabel = "#FAFAFA"
  let buttonOutlinedColorDisableBackground = "#FFFFFF00"
  let buttonOutlinedColorDisableBorder = "#777777"
  let buttonOutlinedColorDisableLabel = "#BBBBBB"
  let buttonOutlinedColorHoverBackground = "#343a40"
  let buttonOutlinedColorHoverBorder = "#EB6619"
  let buttonOutlinedColorHoverLabel = "#FAFAFA"
  let buttonOutlinedColorFocusBackground = "#495057"
  let buttonOutlinedColorFocusBorder = "#EB6619"
  let buttonOutlinedColorFocusLabel = "#FAFAFA"
  let buttonTextColorEnableBackground = "#FFFFFF00"
  let buttonTextColorEnableBorder = "#FFFFFF00"
  let buttonTextColorEnableLabel = "#FAFAFA"
  let buttonTextColorDisableBackground = "#FFFFFF00"
  let buttonTextColorDisableBorder = "#FFFFFF00"
  let buttonTextColorDisableLabel = "#BBBBBB"
  let buttonTextColorHoverBackground = "#343a40"
  let buttonTextColorHoverBorder = "#FFFFFF00"
  let buttonTextColorHoverLabel = "#FAFAFA"
  let buttonTextColorFocusBackground = "#495057"
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
  let iconButtonStandardColorHoverBackground = "#343a40"
  let iconButtonStandardColorFocusBackground = "#495057"
  let iconButtonFloatColorEnableBackground = "#333333"
  let iconButtonFloatColorDisableBackground = "#777777"
  let iconButtonFloatColorHoverBackground = "#343a40"
  let iconButtonFloatColorFocusBackground = "#495057"
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
  let linkColorLabelEnableDefault = "#86D6FB"
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
  let progressIndicatorColorStroke = "#EB6619"
  let progressIndicatorColorLayer = "#333333"
  let radioButtonLabelFontSize: CGFloat = 14
  let radioButtonLabelLetterSpacing: CGFloat = 0.16
  let radioButtonLabelLineHeight: CGFloat = 1.5
  let radioButtonLabelPrimaryFontFamily = "San Francisco"
  let radioButtonLabelPrimaryFontWeight: UIFont.Weight = .regular
  let radioButtonLabelFallbackFontFamily = "San Francisco"
  let radioButtonLabelFallbackFontWeight: UIFont.Weight = .regular
  let radioButtonBorderRadius: CGFloat = 12
  let radioButtonColorSelectBorder = "#EB6619"
  let radioButtonColorSelectContent = "#EB6619"
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
  let shortcutContainedColorEnablePrimaryBackground = "#EB6619"
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
  let shortcutContainedColorHoverPrimaryBackground = "#A0430E"
  let shortcutContainedColorHoverPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorHoverNeutralBackground = "#343a40"
  let shortcutContainedColorHoverNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutContainedColorFocusPrimaryBackground = "#502207"
  let shortcutContainedColorFocusPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorFocusPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorFocusNeutralBackground = "#495057"
  let shortcutContainedColorFocusNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorFocusNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorEnablePrimaryBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnablePrimaryBorder = "#EB6619"
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
  let shortcutOutlinedColorHoverPrimaryBackground = "#343a40"
  let shortcutOutlinedColorHoverPrimaryBorder = "#A0430E"
  let shortcutOutlinedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorHoverNeutralBackground = "#343a40"
  let shortcutOutlinedColorHoverNeutralBorder = "#BBBBBB"
  let shortcutOutlinedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorFocusPrimaryBackground = "#495057"
  let shortcutOutlinedColorFocusPrimaryBorder = "#A0430E"
  let shortcutOutlinedColorFocusPrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorFocusNeutralBackground = "#495057"
  let shortcutOutlinedColorFocusNeutralBorder = "#BBBBBB"
  let shortcutOutlinedColorFocusNeutralLabel = "#FAFAFA"
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
  let tagColorBackgroundPrimary = "#EB6619"
  let tagColorBackgroundSecondary = "#263F30"
  let tagColorBackgroundSuccess = "#BCDEA2"
  let tagColorBackgroundAlert = "#FFAA96"
  let tagColorBackgroundWarning = "#FEF59E"
  let tagColorBackgroundLink = "#86D6FB"
  let tagColorLabelPrimary = "#FFFFFF"
  let tagColorLabelSecondary = "#FFFFFF"
  let tagColorLabelSuccess = "#000000"
  let tagColorLabelAlert = "#000000"
  let tagColorLabelWarning = "#000000"
  let tagColorLabelLink = "#000000"
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
  let heading2FontSize: CGFloat = 60
  let heading2FontWeight: UIFont.Weight = .regular
  let heading2LineHeight: CGFloat = 1.5
  let heading2LetterSpacing: CGFloat = 0
  let heading3FontSize: CGFloat = 48
  let heading3FontWeight: UIFont.Weight = .regular
  let heading3LineHeight: CGFloat = 1.5
  let heading3LetterSpacing: CGFloat = 0
  let heading4FontSize: CGFloat = 34
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
