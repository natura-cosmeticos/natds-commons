// eslint-disable-next-line import/no-extraneous-dependencies
const webfont = require('webfont').default;

const onRejected = require('./onRejected');
const onSuccess = require('./onSuccess');
const getWebfontConfig = require('./getWebfontConfig');

const runWebfont = ({ config, dictionary }) => {
  const webfontConfig = getWebfontConfig({ config, dictionary });

  webfont(webfontConfig).then((result) => onSuccess({ config, result })).catch(onRejected);
};

module.exports = runWebfont;
