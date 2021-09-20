import fs from 'fs';
import path from 'path';
import { registerTypeDefinitionsAction } from './registerTypeDefinitionsAction';
import * as templateHelpers from '../helpers';
import { brands } from '../constants';

jest.mock('fs');
jest.mock('../helpers');

const config = {
  buildPath: 'build/web/avon',
  files: [
    { destination: 'light.json' },
  ],
};

const tokens = {
  button: {
    borderRadius: 4,
  },
  color: {
    primary: '#000000',
  },
};

const splitTokens = {
  components: {
    button: {
      borderRadius: 4,
    },
  },
  tokens: {
    color: {
      primary: '#000000',
    },
  },
};

const expectedTypes = `
 export interface Theme {
  color: Color
  button: Button
}
 export interface Button {
  borderRadius: number
}
 export interface Color {
  primary: string
}`;

describe('registerTypeDefinitionsAction', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('do action', () => {
    let typesTemplateSpy;
    let compileTemplateSpy;
    let splitTokensAndComponentsSpy;

    beforeEach(() => {
      fs.readFileSync.mockImplementation(() => JSON.stringify(tokens));

      typesTemplateSpy = jest
        .fn()
        .mockReturnValue('test');

      compileTemplateSpy = jest
        .spyOn(templateHelpers, 'compileTemplate')
        .mockReturnValue(typesTemplateSpy);

      splitTokensAndComponentsSpy = jest
        .spyOn(templateHelpers, 'splitTokensAndComponents')
        .mockReturnValue(splitTokens);
    });

    it('should return false if definitions already exist', () => {
      fs.existsSync.mockImplementation(() => true);
      expect(registerTypeDefinitionsAction().do(null, config)).toEqual(false);
    });

    describe('type definition creation', () => {
      const existsSyncMock = () => false;

      beforeEach(() => {
        fs.existsSync.mockImplementation(existsSyncMock);
      });

      it('should create the definition if there is none', () => {
        registerTypeDefinitionsAction().do(null, config);

        expect(fs.writeFileSync).toHaveBeenCalledWith('build/web/index.d.ts', 'test');
      });

      it('should create token definitions from json output with fixes', () => {
        registerTypeDefinitionsAction().do(null, config);

        expect(splitTokensAndComponentsSpy).toHaveBeenCalledWith(tokens);
        expect(typesTemplateSpy).toHaveBeenCalledWith({ brands, tokensTypes: expectedTypes });
      });

      it('should compile the correct template', () => {
        registerTypeDefinitionsAction().do(null, config);
        const basePath = path.resolve(__dirname, '..');

        expect(compileTemplateSpy).toHaveBeenCalledWith(`${basePath}/templates/typeDefinitions.hbs`);
      });
    });
  });

  describe('undo action', () => {
    it('should remove file definitions', () => {
      registerTypeDefinitionsAction().undo(null, config);
      expect(fs.unlinkSync).toHaveBeenCalledWith('build/web/index.d.ts');
    });
  });
});
