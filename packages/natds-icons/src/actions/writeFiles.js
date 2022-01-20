import fs from 'fs'
import path from 'path'

export const writeFiles = (data) => {
  if (!data?.outputs) return new Error('no output found to write')

  Object
    .values(data.outputs)
    .forEach(({ outputPath, content }) => {
      const filePath = path.resolve(__dirname, outputPath)

      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true })
      }

      fs.writeFileSync(filePath, content)
    })

  return data
}

export default writeFiles
