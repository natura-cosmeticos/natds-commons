import JsonToTS from 'json-to-ts';
import { buildJsonDts } from './buildJsonDts';

jest.mock('json-to-ts');

const jsonContent = {
  'icon-name': 'code',
};

const data = {
  globalConfig: {
    fontName: 'font-name',
    outputPath: 'folder/name',
  },
  outputs: {
    json: {
      content: JSON.stringify(jsonContent),
    },
  },
};

const mockTypeDefinition = `
interface RootObject {
  icon-name: string;
}`;

const expectedTypeDefinition = `
interface RootObject {
  icon-name: string;
}
declare const styles : RootObject;

export = styles;
`;

describe('buildJsonDts', () => {
  it('should throw if there is no json data', () => {
    try {
      buildJsonDts();
    } catch (error) {
      expect(error.message).toEqual('json not found');
    }
  });

  it('should create the json type definition', () => {
    JsonToTS.mockReturnValue([mockTypeDefinition]);

    const result = buildJsonDts(data);

    expect(JsonToTS).toHaveBeenCalledWith(jsonContent);
    expect(result).toEqual({
      ...data,
      outputs: {
        ...data.outputs,
        jsonDts: {
          content: expectedTypeDefinition,
          outputPath: 'folder/name/font-name.json.d.ts',
        },
      },
    });
  });
});
