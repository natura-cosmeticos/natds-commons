#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const packageJsonPath = process.argv[2] || path.resolve(process.cwd(), 'package.json');

if (!fs.existsSync(packageJsonPath)) {
  console.log('package.json not found');
  process.exit(1);
}

try {
  const packageJsonString = fs.readFileSync(packageJsonPath).toString();
  const packageJson = JSON.parse(packageJsonString);

  console.log(packageJson.version);

  process.exit();
} catch (error) {
  console.log(error);

  process.exit(1);
}
