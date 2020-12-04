const { exec } = require('child_process');

exec('npx lerna changed --json --loglevel=silent', (err, stdout) => {
  const changed = stdout && JSON.parse(stdout).find((item) => item.name === '@naturacosmeticos/natds-icons');

  console.log(!!changed);
});
