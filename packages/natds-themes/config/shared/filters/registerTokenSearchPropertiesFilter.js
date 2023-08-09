const tokenCategories = [
  'size',
  'spacing',
  'typography',
  'borderRadius',
  'color',
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
