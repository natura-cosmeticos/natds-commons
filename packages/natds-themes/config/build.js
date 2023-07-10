import { brands, platforms, modes } from './shared/constants'
import { buildDictionary } from './shared/buildDictionary'

export const build = () => brands
  .map((brand) => modes
    .map((mode) => platforms
      .map((platform) => buildDictionary(brand, mode, platform))
    )
  )

export default build
