const tokenCategories = [
  'size',
  'spacing',
  'typography',
  'borderRadius',
  'color',
  'alert',
  'appBarTop',
  'avatar',
  'badge',
  'button',
  'card',
  'checkbox',
  'counter',
  'select',
  'dialog',
  'divider',
  'expansionPanel',
  'iconButton',
  'image',
  'link',
  'navigationDrawer',
  'progressIndicator',
  'radioButton',
  'shortcut',
  'snackbar',
  'tab',
  'tag',
  'textField',
  'elevation',
  'opacity',
  'asset'
]

export const isTokenSearchProp = (prop) => tokenCategories.includes(prop.attributes.category)

export const registerTokenSearchPropertiesFilter = () => ({
  matcher: isTokenSearchProp,
  name: 'tokenSearchProperties'
})

export default registerTokenSearchPropertiesFilter
