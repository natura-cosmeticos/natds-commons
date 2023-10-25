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
 *  v0.59.23
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

struct AvonV2DarkTheme: Theme {
  let tokens: Tokens = AvonV2DarkTokens()
  let components: Components = AvonV2DarkComponents()
}

struct AvonV2DarkTokens: Tokens {
  let assetFontFileDisplay = "montserrat_bold"
  let assetFontFileHeadline = "montserrat_semi_bold"
  let assetFontFileBodyRegular = "montserrat_regular"
  let assetFontFileBodyBold = "montserrat_bold"
  let assetBrandNeutralAFile = "avon_v2-a-official-dark"
  let assetBrandNeutralAWidth: CGFloat = 256
  let assetBrandNeutralAHeight: CGFloat = 58
  let assetBrandNeutralBFile = "avon_v2-b-official-dark"
  let assetBrandNeutralBWidth: CGFloat = 256
  let assetBrandNeutralBHeight: CGFloat = 58
  let assetBrandCustomAFile = "avon_v2-a-custom"
  let assetBrandCustomAWidth: CGFloat = 256
  let assetBrandCustomAHeight: CGFloat = 58
  let assetBrandCustomBFile = "avon_v2-b-custom"
  let assetBrandCustomBWidth: CGFloat = 256
  let assetBrandCustomBHeight: CGFloat = 58
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
  let colorPrimary = "#FF6388"
  let colorOnPrimary = "#FFFFFF"
  let colorPrimaryLight = "#FF9BB0"
  let colorOnPrimaryLight = "#000000"
  let colorPrimaryLightest = "#FFC8D4"
  let colorOnPrimaryLightest = "#000000"
  let colorPrimaryDark = "#FF2C64"
  let colorOnPrimaryDark = "#FFFFFF"
  let colorPrimaryDarkest = "#F60850"
  let colorOnPrimaryDarkest = "#FFFFFF"
  let colorSecondary = "#D1D1D1"
  let colorOnSecondary = "#000000"
  let colorSecondaryLight = "#E7E7E7"
  let colorOnSecondaryLight = "#000000"
  let colorSecondaryLightest = "#F6F6F6"
  let colorOnSecondaryLightest = "#000000"
  let colorSecondaryDark = "#B0B0B0"
  let colorOnSecondaryDark = "#000000"
  let colorSecondaryDarkest = "#888888"
  let colorOnSecondaryDarkest = "#FFFFFF"
  let colorBackground = "#121212"
  let colorOnBackground = "#FAFAFA"
  let colorSurface = "#333333"
  let colorOnSurface = "#FFFFFF"
  let colorSurfaceInverse = "FAFAFA"
  let colorOnSurfaceInverse = "333333"
  let colorHighlight = "#FFFFFF"
  let colorHighEmphasis = "#FAFAFA"
  let colorMediumEmphasis = "#BBBBBB"
  let colorLowEmphasis = "#777777"
  let colorLowLight = "#000000"
  let colorLink = "#C4DFF3"
  let colorOnLink = "#333333"
  let colorLinkLight = "#E4EFFA"
  let colorOnLinkLight = "#333333"
  let colorLinkLightest = "#F2F8FD"
  let colorOnLinkLightest = "#333333"
  let colorLinkDark = "#8FC4EA"
  let colorOnLinkDark = "#333333"
  let colorLinkDarkest = "#54A6DC"
  let colorOnLinkDarkest = "#FFFFFF"
  let colorSuccess = "#C5E8AE"
  let colorOnSuccess = "#333333"
  let colorSuccessLight = "#E1F3D4"
  let colorOnSuccessLight = "#333333"
  let colorSuccessLightest = "#F1FAEB"
  let colorOnSuccessLightest = "#333333"
  let colorSuccessDark = "#A0D87E"
  let colorOnSuccessDark = "#333333"
  let colorSuccessDarkest = "#7EC655"
  let colorOnSuccessDarkest = "#333333"
  let colorWarning = "#FDE68A"
  let colorOnWarning = "#333333"
  let colorWarningLight = "#FEF3C7"
  let colorOnWarningLight = "#333333"
  let colorWarningLightest = "#FFFBEB"
  let colorOnWarningLightest = "#333333"
  let colorWarningDark = "#FDD34C"
  let colorOnWarningDark = "#333333"
  let colorWarningDarkest = "#FCC433"
  let colorOnWarningDarkest = "#333333"
  let colorAlert = "#FFD0C7"
  let colorOnAlert = "#333333"
  let colorAlertLight = "#FFE5E8"
  let colorOnAlertLight = "#333333"
  let colorAlertLightest = "#FFF3F1"
  let colorOnAlertLightest = "#333333"
  let colorAlertDark = "#FFAFA0"
  let colorOnAlertDark = "#333333"
  let colorAlertDarkest = "#FF826A"
  let colorOnAlertDarkest = "#FFFFFF"
  let colorNeutralMedium = "#BBBBBB"
  let colorNeutralMediumLight = "#FAFAFA"
  let colorNeutralMediumLightest = "#FFFFFF"
  let colorNeutralMediumDark = "#777777"
  let colorNeutralMediumDarkest = "#333333"
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
struct AvonV2DarkComponents: Components {
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
  let avatarColorBackground = "#FF6388"
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
  let badgeColorPrimaryBackground = "#FF6388"
  let badgeColorSecondaryLabel = "#000000"
  let badgeColorSecondaryBackground = "#D1D1D1"
  let badgeColorSuccessLabel = "#333333"
  let badgeColorSuccessBackground = "#C5E8AE"
  let badgeColorAlertLabel = "#333333"
  let badgeColorAlertBackground = "#FFD0C7"
  let buttonLabelFontSize: CGFloat = 14
  let buttonLabelLetterSpacing: CGFloat = 0.44
  let buttonLabelLineHeight: CGFloat = 1.5
  let buttonLabelPrimaryFontFamily = "San Francisco"
  let buttonLabelPrimaryFontWeight: UIFont.Weight = .medium
  let buttonLabelFallbackFontFamily = "San Francisco"
  let buttonLabelFallbackFontWeight: UIFont.Weight = .medium
  let buttonBorderRadius: CGFloat = 4
  let buttonContainedColorEnableBackground = "#FF6388"
  let buttonContainedColorEnableBorder = "#FFFFFF00"
  let buttonContainedColorEnableLabel = "#FFFFFF"
  let buttonContainedColorDisableBackground = "#777777"
  let buttonContainedColorDisableBorder = "#FFFFFF00"
  let buttonContainedColorDisableLabel = "#FAFAFA"
  let buttonContainedColorHoverBackground = "#FF2C64"
  let buttonContainedColorHoverBorder = "#FFFFFF00"
  let buttonContainedColorHoverLabel = "#FFFFFF"
  let buttonContainedColorFocusBackground = "#F60850"
  let buttonContainedColorFocusBorder = "#FFFFFF00"
  let buttonContainedColorFocusLabel = "#FFFFFF"
  let buttonOutlinedColorEnableBackground = "#FFFFFF00"
  let buttonOutlinedColorEnableBorder = "#FF6388"
  let buttonOutlinedColorEnableLabel = "#FAFAFA"
  let buttonOutlinedColorDisableBackground = "#FFFFFF00"
  let buttonOutlinedColorDisableBorder = "#777777"
  let buttonOutlinedColorDisableLabel = "#BBBBBB"
  let buttonOutlinedColorHoverBackground = "#343a40"
  let buttonOutlinedColorHoverBorder = "#FF6388"
  let buttonOutlinedColorHoverLabel = "#FAFAFA"
  let buttonOutlinedColorFocusBackground = "#495057"
  let buttonOutlinedColorFocusBorder = "#FF6388"
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
  let linkColorLabelEnableDefault = "#C4DFF3"
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
  let progressIndicatorColorStroke = "#FF6388"
  let progressIndicatorColorLayer = "#333333"
  let radioButtonLabelFontSize: CGFloat = 14
  let radioButtonLabelLetterSpacing: CGFloat = 0.16
  let radioButtonLabelLineHeight: CGFloat = 1.5
  let radioButtonLabelPrimaryFontFamily = "San Francisco"
  let radioButtonLabelPrimaryFontWeight: UIFont.Weight = .regular
  let radioButtonLabelFallbackFontFamily = "San Francisco"
  let radioButtonLabelFallbackFontWeight: UIFont.Weight = .regular
  let radioButtonBorderRadius: CGFloat = 12
  let radioButtonColorSelectBorder = "#FF6388"
  let radioButtonColorSelectContent = "#FF6388"
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
  let shortcutContainedColorEnablePrimaryBackground = "#FF6388"
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
  let shortcutContainedColorHoverPrimaryBackground = "#FF2C64"
  let shortcutContainedColorHoverPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorHoverNeutralBackground = "#343a40"
  let shortcutContainedColorHoverNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutContainedColorFocusPrimaryBackground = "#F60850"
  let shortcutContainedColorFocusPrimaryBorder = "#FFFFFF00"
  let shortcutContainedColorFocusPrimaryLabel = "#FAFAFA"
  let shortcutContainedColorFocusNeutralBackground = "#495057"
  let shortcutContainedColorFocusNeutralBorder = "#FFFFFF00"
  let shortcutContainedColorFocusNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorEnablePrimaryBackground = "#FFFFFF00"
  let shortcutOutlinedColorEnablePrimaryBorder = "#FF6388"
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
  let shortcutOutlinedColorHoverPrimaryBorder = "#FF2C64"
  let shortcutOutlinedColorHoverPrimaryLabel = "#FAFAFA"
  let shortcutOutlinedColorHoverNeutralBackground = "#343a40"
  let shortcutOutlinedColorHoverNeutralBorder = "#BBBBBB"
  let shortcutOutlinedColorHoverNeutralLabel = "#FAFAFA"
  let shortcutOutlinedColorFocusPrimaryBackground = "#495057"
  let shortcutOutlinedColorFocusPrimaryBorder = "#FF2C64"
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
  let tagColorBackgroundPrimary = "#FF6388"
  let tagColorBackgroundSecondary = "#D1D1D1"
  let tagColorBackgroundSuccess = "#C5E8AE"
  let tagColorBackgroundAlert = "#FFD0C7"
  let tagColorBackgroundWarning = "#FDE68A"
  let tagColorBackgroundLink = "#C4DFF3"
  let tagColorLabelPrimary = "#FFFFFF"
  let tagColorLabelSecondary = "#000000"
  let tagColorLabelSuccess = "#333333"
  let tagColorLabelAlert = "#333333"
  let tagColorLabelWarning = "#333333"
  let tagColorLabelLink = "#333333"
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
