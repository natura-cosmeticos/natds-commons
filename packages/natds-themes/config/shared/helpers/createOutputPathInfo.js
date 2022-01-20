import fs from 'fs'

export const createOutputPathInfo = (filePath, dataBuilderFunction, dictionary, config) => {
  const currentData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : []
  const data = dataBuilderFunction(dictionary, config)

  if (Array.isArray(data)) {
    fs.writeFileSync(filePath, JSON.stringify(currentData.concat(data)))
  } else {
    currentData.push(data)
    fs.writeFileSync(filePath, JSON.stringify(currentData))
  }
}

export default {
  createOutputPathInfo
}
