const unicodeToCss = (unicodeChar) => {
  if (typeof unicodeChar !== 'string') {
    return '\\25C6';
  }
  const unicodeCharArray = unicodeChar.split('');

  unicodeCharArray.map((char) => {
    const code = char.charCodeAt(0);
    let codeHex = code.toString(16).toLowerCase();

    while (codeHex.length < 4) {
      codeHex = `0${codeHex}`;
    }

    return '\\e'.concat(codeHex);
  });

  return unicodeCharArray.join('');
};

module.exports = unicodeToCss;
