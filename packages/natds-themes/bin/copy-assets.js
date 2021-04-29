const { execSync } = require('child_process');
const fs = require('fs');

const brands = [
  'aesop',
  'avon',
  'natura',
  'theBodyShop',
];

const [, , platform, outputPath] = process.argv;

if (!fs.existsSync(outputPath)) {
  execSync(`mkdir -p ${outputPath}`);
}

brands.forEach((brand) => {
  execSync(`cp -r build/${platform}/${brand}/assets/* ${outputPath}`);
});
