import fs from 'fs';
import { createColorIndex } from './createColorIndex';

const template = `
{{#each paths}}
import {{name}} from '.{{path}}';
{{/each}}

export default {
{{#each paths}}
  {{name}},
{{/each}}
};
`;

jest.mock('fs');

describe('createColorIndex', () => {
  it('should create token paths file', () => {
    const buffer = Buffer.from(template, 'utf8');

    const mockPathsFile = [{
      name: 'avonLightColorTokens',
      path: '/avon/light.json',
    }];

    fs
      .readFileSync
      .mockReturnValue(buffer)
      .mockReturnValueOnce(buffer)
      .mockReturnValueOnce(JSON.stringify(mockPathsFile));

    createColorIndex();

    const expectedFile = `
import avonLightColorTokens from './avon/light.json';

export default {
  avonLightColorTokens,
};
`;

    expect(fs.writeFileSync).toHaveBeenCalledWith('./build/react-dom/index.js', expectedFile);
  });
});
