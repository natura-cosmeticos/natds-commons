import path from 'path'
import fs from 'fs'
import { brands } from '../shared/constants'

const replaceBrackets = (data) => data
  .replace(/@@@/gm, '{')
  .replace(/!!!/gm, '}')

export const convertFilToCss = () => {
  brands.forEach((brand) => {
    const themePath = path.resolve(__dirname, '../../build/react-native/', brand)
    const lightThemePath = `${themePath}/light.json`
    const darkThemePath = `${themePath}/dark.json`
    const lightTheme = fs.readFileSync(lightThemePath).toString()
    const darkTheme = fs.readFileSync(darkThemePath).toString()

    fs.writeFileSync(lightThemePath, replaceBrackets(lightTheme))
    fs.writeFileSync(darkThemePath, replaceBrackets(darkTheme))
  })
}

export default convertFilToCss
