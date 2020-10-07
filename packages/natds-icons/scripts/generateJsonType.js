const fs = require('fs');
const path = require('path');
const JsonToTS = require('json-to-ts');
const jsonFile = require('../src/natds-icons.json');

const data = JsonToTS(jsonFile)
  .reduce((types, typeInterface) => types.concat(typeInterface), '')
  .concat('\ndeclare const styles : RootObject;\n\nexport = styles;\n');

const filePath = path.resolve(__dirname, '..', 'src', 'natds-icons.json.d.ts');

try {
  fs.writeFileSync(filePath, data);
  console.info('SUCCESS Done writing JSON module file.');
} catch (error) {
  if (error) {
    throw error;
  }
}
