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
 *  Generated by natds-themes in Fri Oct 01 2021
 *  Do not edit this file.
 * 
 *  If you have any trouble or a feature request, open an issue:
 *  https://github.com/natura-cosmeticos/natds-commons/issues
 *                                                              
 */

protocol Theme {
  var tokens: Tokens
  var components: Components
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
  var colorNeutral50: UIColor { get }
  var colorNeutral100: UIColor { get }
  var colorNeutral200: UIColor { get }
  var colorNeutral300: UIColor { get }
  var colorNeutral400: UIColor { get }
  var colorNeutral500: UIColor { get }
  var colorNeutral600: UIColor { get }
  var colorNeutral700: UIColor { get }
  var colorNeutral800: UIColor { get }
  var colorNeutral900: UIColor { get }
  var colorPrimary: UIColor { get }
  var colorOnPrimary: UIColor { get }
  var colorPrimaryLight: UIColor { get }
  var colorOnPrimaryLight: UIColor { get }
  var colorPrimaryLightest: UIColor { get }
  var colorOnPrimaryLightest: UIColor { get }
  var colorPrimaryDark: UIColor { get }
  var colorOnPrimaryDark: UIColor { get }
  var colorPrimaryDarkest: UIColor { get }
  var colorOnPrimaryDarkest: UIColor { get }
  var colorSecondary: UIColor { get }
  var colorOnSecondary: UIColor { get }
  var colorSecondaryLight: UIColor { get }
  var colorOnSecondaryLight: UIColor { get }
  var colorSecondaryDark: UIColor { get }
  var colorOnSecondaryDark: UIColor { get }
  var colorBackground: UIColor { get }
  var colorOnBackground: UIColor { get }
  var colorSurface: UIColor { get }
  var colorOnSurface: UIColor { get }
  var colorHighlight: UIColor { get }
  var colorHighEmphasis: UIColor { get }
  var colorMediumEmphasis: UIColor { get }
  var colorLowEmphasis: UIColor { get }
  var colorLink: UIColor { get }
  var colorOnLink: UIColor { get }
  var colorSuccess: UIColor { get }
  var colorOnSuccess: UIColor { get }
  var colorWarning: UIColor { get }
  var colorOnWarning: UIColor { get }
  var colorAlert: UIColor { get }
  var colorOnAlert: UIColor { get }
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
  var typographyFontFamilyPrimary: String { get }
  var typographyFontFamilySecondary: String { get }
  var typographyFontFamilyBranding: String { get }
  var typographyFontFamilyCode: String { get }
  var typographyLineHeightReset: CGFloat { get }
  var typographyLineHeightSmall: CGFloat { get }
  var typographyLineHeightMedium: CGFloat { get }
  var typographyLineHeightLarge: CGFloat { get }
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
  var avatarSemiFontSize: CGFloat { get }
  var avatarSemiLetterSpacing: CGFloat { get }
  var avatarSemiLineHeight: CGFloat { get }
  var avatarSemiXFontSize: CGFloat { get }
  var avatarSemiXLetterSpacing: CGFloat { get }
  var avatarSemiXLineHeight: CGFloat { get }
  var avatarMediumFontSize: CGFloat { get }
  var avatarMediumLetterSpacing: CGFloat { get }
  var avatarMediumLineHeight: CGFloat { get }
  var avatarLargeXXXFontSize: CGFloat { get }
  var avatarLargeXXXLetterSpacing: CGFloat { get }
  var avatarLargeXXXLineHeight: CGFloat { get }
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
  var badgeColorPrimaryLabel: UIColor { get }
  var badgeColorPrimaryBackground: UIColor { get }
  var badgeColorSecondaryLabel: UIColor { get }
  var badgeColorSecondaryBackground: UIColor { get }
  var badgeColorSuccessLabel: UIColor { get }
  var badgeColorSuccessBackground: UIColor { get }
  var badgeColorAlertLabel: UIColor { get }
  var badgeColorAlertBackground: UIColor { get }
  var buttonLabelFontSize: CGFloat { get }
  var buttonLabelLetterSpacing: CGFloat { get }
  var buttonLabelLineHeight: CGFloat { get }
  var buttonLabelPrimaryFontFamily: String { get }
  var buttonLabelPrimaryFontWeight: UIFont.Weight { get }
  var buttonLabelFallbackFontFamily: String { get }
  var buttonLabelFallbackFontWeight: UIFont.Weight { get }
  var buttonBorderRadius: CGFloat { get }
  var buttonContainedColorEnableBackground: UIColor { get }
  var buttonContainedColorEnableBorder: UIColor { get }
  var buttonContainedColorEnableLabel: UIColor { get }
  var buttonContainedColorDisableBackground: UIColor { get }
  var buttonContainedColorDisableBorder: UIColor { get }
  var buttonContainedColorDisableLabel: UIColor { get }
  var buttonContainedColorHoverBackground: UIColor { get }
  var buttonContainedColorHoverBorder: UIColor { get }
  var buttonContainedColorHoverLabel: UIColor { get }
  var buttonContainedColorFocusBackground: UIColor { get }
  var buttonContainedColorFocusBorder: UIColor { get }
  var buttonContainedColorFocusLabel: UIColor { get }
  var buttonOutlinedColorEnableBackground: UIColor { get }
  var buttonOutlinedColorEnableBorder: UIColor { get }
  var buttonOutlinedColorEnableLabel: UIColor { get }
  var buttonOutlinedColorDisableBackground: UIColor { get }
  var buttonOutlinedColorDisableBorder: UIColor { get }
  var buttonOutlinedColorDisableLabel: UIColor { get }
  var buttonOutlinedColorHoverBackground: UIColor { get }
  var buttonOutlinedColorHoverBorder: UIColor { get }
  var buttonOutlinedColorHoverLabel: UIColor { get }
  var buttonOutlinedColorFocusBackground: UIColor { get }
  var buttonOutlinedColorFocusBorder: UIColor { get }
  var buttonOutlinedColorFocusLabel: UIColor { get }
  var buttonTextColorEnableBackground: UIColor { get }
  var buttonTextColorEnableBorder: UIColor { get }
  var buttonTextColorEnableLabel: UIColor { get }
  var buttonTextColorDisableBackground: UIColor { get }
  var buttonTextColorDisableBorder: UIColor { get }
  var buttonTextColorDisableLabel: UIColor { get }
  var buttonTextColorHoverBackground: UIColor { get }
  var buttonTextColorHoverBorder: UIColor { get }
  var buttonTextColorHoverLabel: UIColor { get }
  var buttonTextColorFocusBackground: UIColor { get }
  var buttonTextColorFocusBorder: UIColor { get }
  var buttonTextColorFocusLabel: UIColor { get }
  var checkboxLabelFontSize: CGFloat { get }
  var checkboxLabelLetterSpacing: CGFloat { get }
  var checkboxLabelLineHeight: CGFloat { get }
  var checkboxLabelPrimaryFontFamily: String { get }
  var checkboxLabelPrimaryFontWeight: UIFont.Weight { get }
  var checkboxLabelFallbackFontFamily: String { get }
  var checkboxLabelFallbackFontWeight: UIFont.Weight { get }
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
  var expansionPanelTitleFontSize: CGFloat { get }
  var expansionPanelTitleLetterSpacing: CGFloat { get }
  var expansionPanelTitleLineHeight: CGFloat { get }
  var expansionPanelTitlePrimaryFontFamily: String { get }
  var expansionPanelTitlePrimaryFontWeight: UIFont.Weight { get }
  var expansionPanelTitleFallbackFontFamily: String { get }
  var expansionPanelTitleFallbackFontWeight: UIFont.Weight { get }
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
  var radioButtonLabelFontSize: CGFloat { get }
  var radioButtonLabelLetterSpacing: CGFloat { get }
  var radioButtonLabelLineHeight: CGFloat { get }
  var radioButtonLabelPrimaryFontFamily: String { get }
  var radioButtonLabelPrimaryFontWeight: UIFont.Weight { get }
  var radioButtonLabelFallbackFontFamily: String { get }
  var radioButtonLabelFallbackFontWeight: UIFont.Weight { get }
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
  var snackbarContentFontSize: CGFloat { get }
  var snackbarContentLetterSpacing: CGFloat { get }
  var snackbarContentLineHeight: CGFloat { get }
  var snackbarContentPrimaryFontFamily: String { get }
  var snackbarContentPrimaryFontWeight: UIFont.Weight { get }
  var snackbarContentFallbackFontFamily: String { get }
  var snackbarContentFallbackFontWeight: UIFont.Weight { get }
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
  var heading1FontSize: CGFloat { get }
  var heading1FontWeight: UIFont.Weight { get }
  var heading1LetterSpacing: CGFloat { get }
  var heading2FontSize: CGFloat { get }
  var heading2FontWeight: UIFont.Weight { get }
  var heading2LetterSpacing: CGFloat { get }
  var heading3FontSize: CGFloat { get }
  var heading3FontWeight: UIFont.Weight { get }
  var heading3LetterSpacing: CGFloat { get }
  var heading4FontSize: CGFloat { get }
  var heading4FontWeight: UIFont.Weight { get }
  var heading4LetterSpacing: CGFloat { get }
  var heading5FontSize: CGFloat { get }
  var heading5FontWeight: UIFont.Weight { get }
  var heading5LetterSpacing: CGFloat { get }
  var heading6FontSize: CGFloat { get }
  var heading6FontWeight: UIFont.Weight { get }
  var heading6LetterSpacing: CGFloat { get }
  var subtitle1FontSize: CGFloat { get }
  var subtitle1FontWeight: UIFont.Weight { get }
  var subtitle1LetterSpacing: CGFloat { get }
  var subtitle2FontSize: CGFloat { get }
  var subtitle2FontWeight: UIFont.Weight { get }
  var subtitle2LetterSpacing: CGFloat { get }
  var body1FontSize: CGFloat { get }
  var body1FontWeight: UIFont.Weight { get }
  var body1LetterSpacing: CGFloat { get }
  var body2FontSize: CGFloat { get }
  var body2FontWeight: UIFont.Weight { get }
  var body2LetterSpacing: CGFloat { get }
  var captionFontSize: CGFloat { get }
  var captionFontWeight: UIFont.Weight { get }
  var captionLetterSpacing: CGFloat { get }
  var overlineFontSize: CGFloat { get }
  var overlineFontWeight: UIFont.Weight { get }
  var overlineLetterSpacing: CGFloat { get }
}

