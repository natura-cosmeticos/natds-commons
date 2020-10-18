import DtsCreator from 'typed-css-modules';
import { buildCssDts } from './buildCssDts';

jest.mock('typed-css-modules');

const data = {
  globalConfig: {
    fontName: 'font-name',
  },
  outputs: {
    css: {
      content: '.icon {color: red;}',
      outputPath: '../../build/font-name.css',
    },
  },
};

describe('buildCssDts', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create the css file definition', () => {
    const creatorSpy = (path, content) => Promise.resolve(jest.fn(path, content))

    DtsCreator.mockImplementation(() => ({
      create: creatorSpy,
    }));

    buildCssDts(data)
      .then(() => {
        expect(DtsCreator).toHaveBeenCalled();
        expect(creatorSpy).toHaveBeenCalled();
      });
  });

  it('should write the definition', () => {
    const writeFileSpy = jest.fn();

    DtsCreator.mockImplementation(() => ({
      create: () => Promise.resolve({ writeFile: writeFileSpy }),
    }));

    buildCssDts(data)
      .then((result) => {
        expect(writeFileSpy).toHaveBeenCalled();
      });
  });

  it('should return the given data', () => {
    const writeFileSpy = jest.fn();

    DtsCreator.mockImplementation(() => ({
      create: () => Promise.resolve({ writeFile: writeFileSpy }),
    }));

    buildCssDts(data)
      .then((result) => {
        expect(result).toHaveBeenCalled(data);
      });
  });
});
