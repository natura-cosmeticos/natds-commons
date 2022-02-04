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
 *  v0.25.0
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

protocol Theme {
  var tokens: Tokens { get }
  var components: Components { get }
}

protocol Tokens {
  var assetFontFileDisplay: String { get }
  var assetFontFileHeadline: String { get }
  var assetFontFileBodyRegular: String { get }
  var assetFontFileBodyBold: String { get }
  var assetBrandNeutralAFile: String { get }
  var assetBrandNeutralAWidth: CGFloat { get }
  var assetBrandNeutralAHeight: CGFloat { get }
  var assetBrandNeutralBFile: String { get }
  var assetBrandNeutralBWidth: CGFloat { get }
  var assetBrandNeutralBHeight: CGFloat { get }
  var assetBrandCustomAFile: String { get }
  var assetBrandCustomAWidth: CGFloat { get }
  var assetBrandCustomAHeight: CGFloat { get }
  var assetBrandCustomBFile: String { get }
  var assetBrandCustomBWidth: CGFloat { get }
  var assetBrandCustomBHeight: CGFloat { get }
  var borderRadiusNone: CGFloat { get }
  var borderRadiusSmall: CGFloat { get }
  var borderRadiusMedium: CGFloat { get }
  var borderRadiusLarge: CGFloat { get }
  var colorNeutral50: String { get }
  var colorNeutral100: String { get }
  var colorNeutral200: String { get }
  var colorNeutral300: String { get }
  var colorNeutral400: String { get }
  var colorNeutral500: String { get }
  var colorNeutral600: String { get }
  var colorNeutral700: String { get }
  var colorNeutral800: String { get }
  var colorNeutral900: String { get }
  var colorPrimary: String { get }
  var colorOnPrimary: String { get }
  var colorPrimaryLight: String { get }
  var colorOnPrimaryLight: String { get }
  var colorPrimaryLightest: String { get }
  var colorOnPrimaryLightest: String { get }
  var colorPrimaryDark: String { get }
  var colorOnPrimaryDark: String { get }
  var colorPrimaryDarkest: String { get }
  var colorOnPrimaryDarkest: String { get }
  var colorSecondary: String { get }
  var colorOnSecondary: String { get }
  var colorSecondaryLight: String { get }
  var colorOnSecondaryLight: String { get }
  var colorSecondaryDark: String { get }
  var colorOnSecondaryDark: String { get }
  var colorBackground: String { get }
  var colorOnBackground: String { get }
  var colorSurface: String { get }
  var colorOnSurface: String { get }
  var colorHighlight: String { get }
  var colorHighEmphasis: String { get }
  var colorMediumEmphasis: String { get }
  var colorLowEmphasis: String { get }
  var colorLink: String { get }
  var colorOnLink: String { get }
  var colorSuccess: String { get }
  var colorOnSuccess: String { get }
  var colorWarning: String { get }
  var colorOnWarning: String { get }
  var colorAlert: String { get }
  var colorOnAlert: String { get }
  var elevationNoneShadowColor: String { get }
  var elevationNoneShadowOffsetWidth: CGFloat { get }
  var elevationNoneShadowOffsetHeight: CGFloat { get }
  var elevationNoneShadowRadius: CGFloat { get }
  var elevationNoneShadowOpacity: Float { get }
  var elevationMicroShadowColor: String { get }
  var elevationMicroShadowOffsetWidth: CGFloat { get }
  var elevationMicroShadowOffsetHeight: CGFloat { get }
  var elevationMicroShadowRadius: CGFloat { get }
  var elevationMicroShadowOpacity: Float { get }
  var elevationTinyShadowColor: String { get }
  var elevationTinyShadowOffsetWidth: CGFloat { get }
  var elevationTinyShadowOffsetHeight: CGFloat { get }
  var elevationTinyShadowRadius: CGFloat { get }
  var elevationTinyShadowOpacity: Float { get }
  var elevationSmallShadowColor: String { get }
  var elevationSmallShadowOffsetWidth: CGFloat { get }
  var elevationSmallShadowOffsetHeight: CGFloat { get }
  var elevationSmallShadowRadius: CGFloat { get }
  var elevationSmallShadowOpacity: Float { get }
  var elevationMediumShadowColor: String { get }
  var elevationMediumShadowOffsetWidth: CGFloat { get }
  var elevationMediumShadowOffsetHeight: CGFloat { get }
  var elevationMediumShadowRadius: CGFloat { get }
  var elevationMediumShadowOpacity: Float { get }
  var elevationLargeShadowColor: String { get }
  var elevationLargeShadowOffsetWidth: CGFloat { get }
  var elevationLargeShadowOffsetHeight: CGFloat { get }
  var elevationLargeShadowRadius: CGFloat { get }
  var elevationLargeShadowOpacity: Float { get }
  var elevationLargeXShadowColor: String { get }
  var elevationLargeXShadowOffsetWidth: CGFloat { get }
  var elevationLargeXShadowOffsetHeight: CGFloat { get }
  var elevationLargeXShadowRadius: CGFloat { get }
  var elevationLargeXShadowOpacity: Float { get }
  var elevationLargeXXShadowColor: String { get }
  var elevationLargeXXShadowOffsetWidth: CGFloat { get }
  var elevationLargeXXShadowOffsetHeight: CGFloat { get }
  var elevationLargeXXShadowRadius: CGFloat { get }
  var elevationLargeXXShadowOpacity: Float { get }
  var elevationHugeShadowColor: String { get }
  var elevationHugeShadowOffsetWidth: CGFloat { get }
  var elevationHugeShadowOffsetHeight: CGFloat { get }
  var elevationHugeShadowRadius: CGFloat { get }
  var elevationHugeShadowOpacity: Float { get }
  var elevationHugeXShadowColor: String { get }
  var elevationHugeXShadowOffsetWidth: CGFloat { get }
  var elevationHugeXShadowOffsetHeight: CGFloat { get }
  var elevationHugeXShadowRadius: CGFloat { get }
  var elevationHugeXShadowOpacity: Float { get }
  var elevationHugeXXShadowColor: String { get }
  var elevationHugeXXShadowOffsetWidth: CGFloat { get }
  var elevationHugeXXShadowOffsetHeight: CGFloat { get }
  var elevationHugeXXShadowRadius: CGFloat { get }
  var elevationHugeXXShadowOpacity: Float { get }
  var opacityTransparent: CGFloat { get }
  var opacityLower: CGFloat { get }
  var opacityVeryLow: CGFloat { get }
  var opacityLow: CGFloat { get }
  var opacityMediumLow: CGFloat { get }
  var opacityDisabledLow: CGFloat { get }
  var opacityDisabled: CGFloat { get }
  var opacityMedium: CGFloat { get }
  var opacityMediumHigh: CGFloat { get }
  var opacityHigh: CGFloat { get }
  var opacityVeryHigh: CGFloat { get }
  var opacityOpaque: CGFloat { get }
  var sizeNone: CGFloat { get }
  var sizeMicro: CGFloat { get }
  var sizeTiny: CGFloat { get }
  var sizeSmall: CGFloat { get }
  var sizeStandard: CGFloat { get }
  var sizeSemi: CGFloat { get }
  var sizeSemiX: CGFloat { get }
  var sizeMedium: CGFloat { get }
  var sizeMediumX: CGFloat { get }
  var sizeLarge: CGFloat { get }
  var sizeLargeX: CGFloat { get }
  var sizeLargeXX: CGFloat { get }
  var sizeLargeXXX: CGFloat { get }
  var sizeHuge: CGFloat { get }
  var sizeHugeX: CGFloat { get }
  var sizeHugeXX: CGFloat { get }
  var sizeHugeXXX: CGFloat { get }
  var sizeVeryHuge: CGFloat { get }
  var spacingNone: CGFloat { get }
  var spacingMicro: CGFloat { get }
  var spacingTiny: CGFloat { get }
  var spacingSmall: CGFloat { get }
  var spacingStandard: CGFloat { get }
  var spacingSemi: CGFloat { get }
  var spacingLarge: CGFloat { get }
  var spacingXLarge: CGFloat { get }
  var typographyFontSizeLevel1: CGFloat { get }
  var typographyFontSizeLevel2: CGFloat { get }
  var typographyFontSizeLevel3: CGFloat { get }
  var typographyFontSizeLevel4: CGFloat { get }
  var typographyFontSizeLevel5: CGFloat { get }
  var typographyFontSizeLevel6: CGFloat { get }
  var typographyFontSizeLevel7: CGFloat { get }
  var typographyFontSizeLevel8: CGFloat { get }
  var typographyFontSizeLevel9: CGFloat { get }
  var typographyFontSizeLevel10: CGFloat { get }
  var typographyFontSizeLevel11: CGFloat { get }
  var typographyFontSizeLevel12: CGFloat { get }
  var typographyFontSizeLevel13: CGFloat { get }
  var typographyFontSizeLevel14: CGFloat { get }
  var typographyFontSizeLevel15: CGFloat { get }
  var typographyFontSizeLevel16: CGFloat { get }
  var typographyFontSizeLevel17: CGFloat { get }
  var typographyLineHeightAuto: CGFloat { get }
  var typographyLineHeightReset: CGFloat { get }
  var typographyLineHeightSmall: CGFloat { get }
  var typographyLineHeightMedium: CGFloat { get }
  var typographyLineHeightLarge: CGFloat { get }
  @available(*, deprecated, message: "replace with Headline, Display or Body")
  var typographyFontFamilyPrimary: String { get }
  @available(*, deprecated, message: "replace with Headline, Display or Body")
  var typographyFontFamilySecondary: String { get }
  @available(*, deprecated, message: "replace with Headline, Display or Body")
  var typographyFontFamilyBranding: String { get }
  var typographyFontFamilyCode: String { get }
  var typographyFontWeightRegular: UIFont.Weight { get }
  var typographyFontWeightMedium: UIFont.Weight { get }
  var typographyDisplayFontFamily: String { get }
  var typographyDisplayFontWeight: UIFont.Weight { get }
  var typographyHeadlineFontFamily: String { get }
  var typographyHeadlineFontWeight: UIFont.Weight { get }
  var typographyBodyRegularFontFamily: String { get }
  var typographyBodyRegularFontWeight: UIFont.Weight { get }
  var typographyBodyBoldFontFamily: String { get }
  var typographyBodyBoldFontWeight: UIFont.Weight { get }
  var typographyFallbackFontFamily: String { get }
  var typographyFallbackFontWeight: UIFont.Weight { get }
}

protocol Components {
  var alertTitleFontSize: CGFloat { get }
  var alertTitleLetterSpacing: CGFloat { get }
  var alertTitleLineHeight: CGFloat { get }
  var alertTitlePrimaryFontFamily: String { get }
  var alertTitlePrimaryFontWeight: UIFont.Weight { get }
  var alertTitleFallbackFontFamily: String { get }
  var alertTitleFallbackFontWeight: UIFont.Weight { get }
  var alertContentFontSize: CGFloat { get }
  var alertContentLetterSpacing: CGFloat { get }
  var alertContentLineHeight: CGFloat { get }
  var alertContentPrimaryFontFamily: String { get }
  var alertContentPrimaryFontWeight: UIFont.Weight { get }
  var alertContentFallbackFontFamily: String { get }
  var alertContentFallbackFontWeight: UIFont.Weight { get }
  var alertBorderRadius: CGFloat { get }
  var appBarTopTitleFontSize: CGFloat { get }
  var appBarTopTitleLetterSpacing: CGFloat { get }
  var appBarTopTitleLineHeight: CGFloat { get }
  var appBarTopTitlePrimaryFontFamily: String { get }
  var appBarTopTitlePrimaryFontWeight: UIFont.Weight { get }
  var appBarTopTitleFallbackFontFamily: String { get }
  var appBarTopTitleFallbackFontWeight: UIFont.Weight { get }
  var avatarStandardFontSize: CGFloat { get }
  var avatarStandardLetterSpacing: CGFloat { get }
  var avatarStandardLineHeight: CGFloat { get }
  var avatarStandardBorderRadius: CGFloat { get }
  var avatarSemiFontSize: CGFloat { get }
  var avatarSemiLetterSpacing: CGFloat { get }
  var avatarSemiLineHeight: CGFloat { get }
  var avatarSemiBorderRadius: CGFloat { get }
  var avatarSemiXFontSize: CGFloat { get }
  var avatarSemiXLetterSpacing: CGFloat { get }
  var avatarSemiXLineHeight: CGFloat { get }
  var avatarSemiXBorderRadius: CGFloat { get }
  var avatarMediumFontSize: CGFloat { get }
  var avatarMediumLetterSpacing: CGFloat { get }
  var avatarMediumLineHeight: CGFloat { get }
  var avatarMediumBorderRadius: CGFloat { get }
  var avatarLargeXXXFontSize: CGFloat { get }
  var avatarLargeXXXLetterSpacing: CGFloat { get }
  var avatarLargeXXXLineHeight: CGFloat { get }
  var avatarLargeXXXBorderRadius: CGFloat { get }
  var avatarPrimaryFontFamily: String { get }
  var avatarPrimaryFontWeight: UIFont.Weight { get }
  var avatarFallbackFontFamily: String { get }
  var avatarFallbackFontWeight: UIFont.Weight { get }
  var badgeLabelFontSize: CGFloat { get }
  var badgeLabelLetterSpacing: CGFloat { get }
  var badgeLabelLineHeight: CGFloat { get }
  var badgeLabelPrimaryFontFamily: String { get }
  var badgeLabelPrimaryFontWeight: UIFont.Weight { get }
  var badgeLabelFallbackFontFamily: String { get }
  var badgeLabelFallbackFontWeight: UIFont.Weight { get }
  var badgeStandardHeight: CGFloat { get }
  var badgeStandardBorderRadius: CGFloat { get }
  var badgeDotHeight: CGFloat { get }
  var badgeDotBorderRadius: CGFloat { get }
  var badgeColorPrimaryLabel: String { get }
  var badgeColorPrimaryBackground: String { get }
  var badgeColorSecondaryLabel: String { get }
  var badgeColorSecondaryBackground: String { get }
  var badgeColorSuccessLabel: String { get }
  var badgeColorSuccessBackground: String { get }
  var badgeColorAlertLabel: String { get }
  var badgeColorAlertBackground: String { get }
  var buttonLabelFontSize: CGFloat { get }
  var buttonLabelLetterSpacing: CGFloat { get }
  var buttonLabelLineHeight: CGFloat { get }
  var buttonLabelPrimaryFontFamily: String { get }
  var buttonLabelPrimaryFontWeight: UIFont.Weight { get }
  var buttonLabelFallbackFontFamily: String { get }
  var buttonLabelFallbackFontWeight: UIFont.Weight { get }
  var buttonBorderRadius: CGFloat { get }
  var buttonContainedColorEnableBackground: String { get }
  var buttonContainedColorEnableBorder: String { get }
  var buttonContainedColorEnableLabel: String { get }
  var buttonContainedColorDisableBackground: String { get }
  var buttonContainedColorDisableBorder: String { get }
  var buttonContainedColorDisableLabel: String { get }
  var buttonContainedColorHoverBackground: String { get }
  var buttonContainedColorHoverBorder: String { get }
  var buttonContainedColorHoverLabel: String { get }
  var buttonContainedColorFocusBackground: String { get }
  var buttonContainedColorFocusBorder: String { get }
  var buttonContainedColorFocusLabel: String { get }
  var buttonOutlinedColorEnableBackground: String { get }
  var buttonOutlinedColorEnableBorder: String { get }
  var buttonOutlinedColorEnableLabel: String { get }
  var buttonOutlinedColorDisableBackground: String { get }
  var buttonOutlinedColorDisableBorder: String { get }
  var buttonOutlinedColorDisableLabel: String { get }
  var buttonOutlinedColorHoverBackground: String { get }
  var buttonOutlinedColorHoverBorder: String { get }
  var buttonOutlinedColorHoverLabel: String { get }
  var buttonOutlinedColorFocusBackground: String { get }
  var buttonOutlinedColorFocusBorder: String { get }
  var buttonOutlinedColorFocusLabel: String { get }
  var buttonTextColorEnableBackground: String { get }
  var buttonTextColorEnableBorder: String { get }
  var buttonTextColorEnableLabel: String { get }
  var buttonTextColorDisableBackground: String { get }
  var buttonTextColorDisableBorder: String { get }
  var buttonTextColorDisableLabel: String { get }
  var buttonTextColorHoverBackground: String { get }
  var buttonTextColorHoverBorder: String { get }
  var buttonTextColorHoverLabel: String { get }
  var buttonTextColorFocusBackground: String { get }
  var buttonTextColorFocusBorder: String { get }
  var buttonTextColorFocusLabel: String { get }
  var cardBorderRadiusEnable: CGFloat { get }
  var cardBorderRadiusDisable: CGFloat { get }
  var cardColorBackground: String { get }
  var checkboxLabelFontSize: CGFloat { get }
  var checkboxLabelLetterSpacing: CGFloat { get }
  var checkboxLabelLineHeight: CGFloat { get }
  var checkboxLabelPrimaryFontFamily: String { get }
  var checkboxLabelPrimaryFontWeight: UIFont.Weight { get }
  var checkboxLabelFallbackFontFamily: String { get }
  var checkboxLabelFallbackFontWeight: UIFont.Weight { get }
  var checkboxBorderRadius: CGFloat { get }
  var counterLabelPrimaryFontFamily: String { get }
  var counterLabelPrimaryFontWeight: UIFont.Weight { get }
  var counterLabelFallbackFontFamily: String { get }
  var counterLabelFallbackFontWeight: UIFont.Weight { get }
  var counterLabelFontSize: CGFloat { get }
  var counterLabelLetterSpacing: CGFloat { get }
  var counterLabelLineHeight: CGFloat { get }
  var counterContentPrimaryFontFamily: String { get }
  var counterContentPrimaryFontWeight: UIFont.Weight { get }
  var counterContentFallbackFontFamily: String { get }
  var counterContentFallbackFontWeight: UIFont.Weight { get }
  var counterContentFontSize: CGFloat { get }
  var counterContentLetterSpacing: CGFloat { get }
  var counterContentLineHeight: CGFloat { get }
  var counterBorderRadius: CGFloat { get }
  var dialogTitleFontSize: CGFloat { get }
  var dialogTitleLetterSpacing: CGFloat { get }
  var dialogTitleLineHeight: CGFloat { get }
  var dialogTitlePrimaryFontFamily: String { get }
  var dialogTitlePrimaryFontWeight: UIFont.Weight { get }
  var dialogTitleFallbackFontFamily: String { get }
  var dialogTitleFallbackFontWeight: UIFont.Weight { get }
  var dialogBodyFontSize: CGFloat { get }
  var dialogBodyLetterSpacing: CGFloat { get }
  var dialogBodyLineHeight: CGFloat { get }
  var dialogBodyPrimaryFontFamily: String { get }
  var dialogBodyPrimaryFontWeight: UIFont.Weight { get }
  var dialogBodyFallbackFontFamily: String { get }
  var dialogBodyFallbackFontWeight: UIFont.Weight { get }
  var dialogBorderRadius: CGFloat { get }
  var dialogColorBackground: String { get }
  var dialogColorTitle: String { get }
  var dividerColorBackground: String { get }
  var expansionPanelTitleFontSize: CGFloat { get }
  var expansionPanelTitleLetterSpacing: CGFloat { get }
  var expansionPanelTitleLineHeight: CGFloat { get }
  var expansionPanelTitlePrimaryFontFamily: String { get }
  var expansionPanelTitlePrimaryFontWeight: UIFont.Weight { get }
  var expansionPanelTitleFallbackFontFamily: String { get }
  var expansionPanelTitleFallbackFontWeight: UIFont.Weight { get }
  var expansionPanelBorderRadius: CGFloat { get }
  var iconButtonSemiBorderRadius: CGFloat { get }
  var iconButtonSemiXBorderRadius: CGFloat { get }
  var iconButtonMediumBorderRadius: CGFloat { get }
  var imageBorderRadiusEnable: CGFloat { get }
  var imageBorderRadiusDisable: CGFloat { get }
  var linkLabelFontSize: CGFloat { get }
  var linkLabelLetterSpacing: CGFloat { get }
  var linkLabelLineHeight: CGFloat { get }
  var linkLabelPrimaryFontFamily: String { get }
  var linkLabelPrimaryFontWeight: UIFont.Weight { get }
  var linkLabelFallbackFontFamily: String { get }
  var linkLabelFallbackFontWeight: UIFont.Weight { get }
  var linkColorLabelEnableDefault: String { get }
  var linkColorLabelEnableLight: String { get }
  var menuItemBorderRadius: CGFloat { get }
  var navigationDrawerHeaderTitleFontSize: CGFloat { get }
  var navigationDrawerHeaderTitleLetterSpacing: CGFloat { get }
  var navigationDrawerHeaderTitleLineHeight: CGFloat { get }
  var navigationDrawerHeaderTitlePrimaryFontFamily: String { get }
  var navigationDrawerHeaderTitlePrimaryFontWeight: UIFont.Weight { get }
  var navigationDrawerHeaderTitleFallbackFontFamily: String { get }
  var navigationDrawerHeaderTitleFallbackFontWeight: UIFont.Weight { get }
  var navigationDrawerHeaderSubtitleFontSize: CGFloat { get }
  var navigationDrawerHeaderSubtitleLetterSpacing: CGFloat { get }
  var navigationDrawerHeaderSubtitleLineHeight: CGFloat { get }
  var navigationDrawerHeaderSubtitlePrimaryFontFamily: String { get }
  var navigationDrawerHeaderSubtitlePrimaryFontWeight: UIFont.Weight { get }
  var navigationDrawerHeaderSubtitleFallbackFontFamily: String { get }
  var navigationDrawerHeaderSubtitleFallbackFontWeight: UIFont.Weight { get }
  var navigationDrawerSectionTitleFontSize: CGFloat { get }
  var navigationDrawerSectionTitleLetterSpacing: CGFloat { get }
  var navigationDrawerSectionTitleLineHeight: CGFloat { get }
  var navigationDrawerSectionTitlePrimaryFontFamily: String { get }
  var navigationDrawerSectionTitlePrimaryFontWeight: UIFont.Weight { get }
  var navigationDrawerSectionTitleFallbackFontFamily: String { get }
  var navigationDrawerSectionTitleFallbackFontWeight: UIFont.Weight { get }
  var navigationDrawerSectionItemFontSize: CGFloat { get }
  var navigationDrawerSectionItemLetterSpacing: CGFloat { get }
  var navigationDrawerSectionItemLineHeight: CGFloat { get }
  var navigationDrawerSectionItemPrimaryFontFamily: String { get }
  var navigationDrawerSectionItemPrimaryFontWeight: UIFont.Weight { get }
  var navigationDrawerSectionItemFallbackFontFamily: String { get }
  var navigationDrawerSectionItemFallbackFontWeight: UIFont.Weight { get }
  var progressIndicatorStandardBorderRadius: CGFloat { get }
  var progressIndicatorSemiBorderRadius: CGFloat { get }
  var progressIndicatorMediumBorderRadius: CGFloat { get }
  var progressIndicatorLargeBorderRadius: CGFloat { get }
  var radioButtonLabelFontSize: CGFloat { get }
  var radioButtonLabelLetterSpacing: CGFloat { get }
  var radioButtonLabelLineHeight: CGFloat { get }
  var radioButtonLabelPrimaryFontFamily: String { get }
  var radioButtonLabelPrimaryFontWeight: UIFont.Weight { get }
  var radioButtonLabelFallbackFontFamily: String { get }
  var radioButtonLabelFallbackFontWeight: UIFont.Weight { get }
  var radioButtonBorderRadius: CGFloat { get }
  var ratingCounterLabelFontSize: CGFloat { get }
  var ratingCounterLabelLetterSpacing: CGFloat { get }
  var ratingCounterLabelLineHeight: CGFloat { get }
  var ratingCounterLabelPrimaryFontFamily: String { get }
  var ratingCounterLabelPrimaryFontWeight: UIFont.Weight { get }
  var ratingCounterLabelFallbackFontFamily: String { get }
  var ratingCounterLabelFallbackFontWeight: UIFont.Weight { get }
  var ratingInputLabelFontSize: CGFloat { get }
  var ratingInputLabelLetterSpacing: CGFloat { get }
  var ratingInputLabelLineHeight: CGFloat { get }
  var ratingInputLabelPrimaryFontFamily: String { get }
  var ratingInputLabelPrimaryFontWeight: UIFont.Weight { get }
  var ratingInputLabelFallbackFontFamily: String { get }
  var ratingInputLabelFallbackFontWeight: UIFont.Weight { get }
  var shortcutLabelFontSize: CGFloat { get }
  var shortcutLabelLetterSpacing: CGFloat { get }
  var shortcutLabelLineHeight: CGFloat { get }
  var shortcutLabelPrimaryFontFamily: String { get }
  var shortcutLabelPrimaryFontWeight: UIFont.Weight { get }
  var shortcutLabelFallbackFontFamily: String { get }
  var shortcutLabelFallbackFontWeight: UIFont.Weight { get }
  var shortcutBorderRadius: CGFloat { get }
  var snackbarContentFontSize: CGFloat { get }
  var snackbarContentLetterSpacing: CGFloat { get }
  var snackbarContentLineHeight: CGFloat { get }
  var snackbarContentPrimaryFontFamily: String { get }
  var snackbarContentPrimaryFontWeight: UIFont.Weight { get }
  var snackbarContentFallbackFontFamily: String { get }
  var snackbarContentFallbackFontWeight: UIFont.Weight { get }
  var snackbarBorderRadius: CGFloat { get }
  var tabLabelFontSize: CGFloat { get }
  var tabLabelLetterSpacing: CGFloat { get }
  var tabLabelLineHeight: CGFloat { get }
  var tabLabelPrimaryFontFamily: String { get }
  var tabLabelPrimaryFontWeight: UIFont.Weight { get }
  var tabLabelFallbackFontFamily: String { get }
  var tabLabelFallbackFontWeight: UIFont.Weight { get }
  var tagLabelFontSize: CGFloat { get }
  var tagLabelLetterSpacing: CGFloat { get }
  var tagLabelLineHeight: CGFloat { get }
  var tagLabelPrimaryFontFamily: String { get }
  var tagLabelPrimaryFontWeight: UIFont.Weight { get }
  var tagLabelFallbackFontFamily: String { get }
  var tagLabelFallbackFontWeight: UIFont.Weight { get }
  var tagSmallBorderRadiusEnable: CGFloat { get }
  var tagSmallBorderRadiusDisable: CGFloat { get }
  var tagStandardBorderRadiusEnable: CGFloat { get }
  var tagStandardBorderRadiusDisable: CGFloat { get }
  var tagColorBackgroundPrimary: String { get }
  var tagColorBackgroundSecondary: String { get }
  var tagColorBackgroundSuccess: String { get }
  var tagColorBackgroundAlert: String { get }
  var tagColorBackgroundWarning: String { get }
  var tagColorBackgroundLink: String { get }
  var tagColorLabelPrimary: String { get }
  var tagColorLabelSecondary: String { get }
  var tagColorLabelSuccess: String { get }
  var tagColorLabelAlert: String { get }
  var tagColorLabelWarning: String { get }
  var tagColorLabelLink: String { get }
  var textFieldLabelPrimaryFontFamily: String { get }
  var textFieldLabelPrimaryFontWeight: UIFont.Weight { get }
  var textFieldLabelFallbackFontFamily: String { get }
  var textFieldLabelFallbackFontWeight: UIFont.Weight { get }
  var textFieldLabelFontSize: CGFloat { get }
  var textFieldLabelLetterSpacing: CGFloat { get }
  var textFieldLabelLineHeight: CGFloat { get }
  var textFieldContentPrimaryFontFamily: String { get }
  var textFieldContentPrimaryFontWeight: UIFont.Weight { get }
  var textFieldContentFallbackFontFamily: String { get }
  var textFieldContentFallbackFontWeight: UIFont.Weight { get }
  var textFieldContentFontSize: CGFloat { get }
  var textFieldContentLetterSpacing: CGFloat { get }
  var textFieldContentLineHeight: CGFloat { get }
  var textFieldHelperTextPrimaryFontFamily: String { get }
  var textFieldHelperTextPrimaryFontWeight: UIFont.Weight { get }
  var textFieldHelperTextFallbackFontFamily: String { get }
  var textFieldHelperTextFallbackFontWeight: UIFont.Weight { get }
  var textFieldHelperTextFontSize: CGFloat { get }
  var textFieldHelperTextLetterSpacing: CGFloat { get }
  var textFieldHelperTextLineHeight: CGFloat { get }
  var textFieldBorderRadius: CGFloat { get }
  var heading1FontSize: CGFloat { get }
  var heading1FontWeight: UIFont.Weight { get }
  var heading1LineHeight: CGFloat { get }
  var heading1LetterSpacing: CGFloat { get }
  var heading2FontSize: CGFloat { get }
  var heading2FontWeight: UIFont.Weight { get }
  var heading2LineHeight: CGFloat { get }
  var heading2LetterSpacing: CGFloat { get }
  var heading3FontSize: CGFloat { get }
  var heading3FontWeight: UIFont.Weight { get }
  var heading3LineHeight: CGFloat { get }
  var heading3LetterSpacing: CGFloat { get }
  var heading4FontSize: CGFloat { get }
  var heading4FontWeight: UIFont.Weight { get }
  var heading4LineHeight: CGFloat { get }
  var heading4LetterSpacing: CGFloat { get }
  var heading5FontSize: CGFloat { get }
  var heading5FontWeight: UIFont.Weight { get }
  var heading5LineHeight: CGFloat { get }
  var heading5LetterSpacing: CGFloat { get }
  var heading6FontSize: CGFloat { get }
  var heading6FontWeight: UIFont.Weight { get }
  var heading6LineHeight: CGFloat { get }
  var heading6LetterSpacing: CGFloat { get }
  var subtitle1FontSize: CGFloat { get }
  var subtitle1FontWeight: UIFont.Weight { get }
  var subtitle1LineHeight: CGFloat { get }
  var subtitle1LetterSpacing: CGFloat { get }
  var subtitle2FontSize: CGFloat { get }
  var subtitle2FontWeight: UIFont.Weight { get }
  var subtitle2LineHeight: CGFloat { get }
  var subtitle2LetterSpacing: CGFloat { get }
  var body1FontSize: CGFloat { get }
  var body1FontWeight: UIFont.Weight { get }
  var body1LineHeight: CGFloat { get }
  var body1LetterSpacing: CGFloat { get }
  var body2FontSize: CGFloat { get }
  var body2FontWeight: UIFont.Weight { get }
  var body2LineHeight: CGFloat { get }
  var body2LetterSpacing: CGFloat { get }
  var captionFontSize: CGFloat { get }
  var captionFontWeight: UIFont.Weight { get }
  var captionLineHeight: CGFloat { get }
  var captionLetterSpacing: CGFloat { get }
  var overlineFontSize: CGFloat { get }
  var overlineFontWeight: UIFont.Weight { get }
  var overlineLineHeight: CGFloat { get }
  var overlineLetterSpacing: CGFloat { get }
}

