import {
  pluck, join, pipe, uniq
} from 'ramda'
import { isCustomAsset, execPattern } from '../helpers'

export const registerFillToCssTransform = () => ({
  matcher: isCustomAsset,
  name: 'asset/svg-fill-to-css',
  transformer: (prop) => {
    const elements = execPattern('<(?<element>\\w+)\\b[\\s\\w\\d".\\-=]*?fill="[#\\d\\w]*?"[\\s\\w\\d".\\-=]*?\\/?>', prop.value)

    const elementsForCss = pipe(pluck('element'), uniq, join(','))(elements)

    const style = `
    <style>
      ${elementsForCss} @@@
        fill: #000000
      !!!
    </style>
    `

    const result = prop.value
      .replace(/fill="[#\d\w]*?"/gm, '')
      .replace(/(<svg.*?>)/, `$1${style}`)

    return result
  },
  transitive: false,
  type: 'value'
})

export default registerFillToCssTransform
