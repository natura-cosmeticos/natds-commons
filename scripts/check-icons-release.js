const { exec } = require('child_process');

exec('npx lerna changed --json --loglevel=silent', (err, stdout) => {
  if (err) {
    return;
  }

  const changed = JSON.parse(stdout).find((item) => item.name === '@naturacosmeticos/natds-icons');

  console.log(!!changed);
});
