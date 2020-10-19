import { getUnicodeIconString, getIconString } from './helpers';

const jsonContent = {
  'icon-name': '%uEA0A',
};

const data = {
  outputs: {
    json: {
      content: JSON.stringify(jsonContent),
    },
  },
};

describe('helpers', () => {
  describe('getIconString', () => {
    it('should create icons camel case and snake case', () => {
      const result = getIconString(data);

      expect(result).toEqual('case IconName = "icon-name"\n\t');
    });
  });

  describe('getUnicodeIconString', () => {
    it('should create icons camel case and values', () => {
      const result = getUnicodeIconString(data);

      expect(result).toEqual('case .IconName: return "\\u{EA0A}"\n\t\t');
    });
  });
});
