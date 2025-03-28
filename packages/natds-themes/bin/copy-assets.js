//trigger pipiline
//trigger pipiline 2
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const [, , platform, outputPath] = process.argv

if (!fs.existsSync(outputPath)) {
  execSync(`mkdir -p ${outputPath}`)
}

const inputPath = path.resolve(`build/${platform}/assets/`)

execSync(`cp -r ${inputPath}/* ${outputPath}`)
