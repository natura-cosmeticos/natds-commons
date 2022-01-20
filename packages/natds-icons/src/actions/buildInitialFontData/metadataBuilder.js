import path from 'path'
import 'string.fromcodepoint'
import 'string.prototype.codepointat'

const findNextCodepoint = (startCode, usedCodes) => (
  usedCodes.includes(startCode)
    ? findNextCodepoint(startCode + 1, usedCodes)
    : startCode
)

const getUsedUnicodesFromFile = (previousCodes) => Object
  .values(previousCodes)
  .flat(2)
  .map((item) => item[0].codePointAt(0))

const buildInitialMetadata = (file) => ({
  name: path.basename(file).replace('.svg', ''),
  path: file,
  renamed: false,
  unicode: []
})

const startUnicode = 0xea01

export const getMetadataProvider = (data) => {
  const usedUnicodes = getUsedUnicodesFromFile(data.previousIconCodes)

  return (file, cb) => {
    const metadata = buildInitialMetadata(file)

    if (data.previousIconCodes[metadata.name]) {
      metadata.unicode = data.previousIconCodes[metadata.name]
    } else {
      const nextCode = findNextCodepoint(startUnicode, usedUnicodes)

      metadata.unicode[0] = String.fromCodePoint(nextCode)
      usedUnicodes.push(nextCode)
    }

    cb(null, metadata)
  }
}

export default getMetadataProvider
