import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const getStringFile = (filePath) => fs.readFileSync(path.join(__dirname, filePath)).toString();

describe('icons library', () => {
  beforeAll(() => {
    execSync('yarn build:icons');
  });

  it('should create icon names json file', () => {
    const jsonFile = getStringFile('../dist/natds-icons.json');

    expect(jsonFile).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.json'));
  });

  it('should create json type definition file', () => {
    const jsonDefinitionFile = getStringFile('../dist/natds-icons.json.d.ts');

    expect(jsonDefinitionFile).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.json.d.ts'));
  });

  it('should create css file', () => {
    const cssFile = getStringFile('../dist/natds-icons.css');

    expect(cssFile).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.css'));
  });

  it('should create css type definition file', () => {
    const cssDefinitionFile = getStringFile('../dist/natds-icons.css.d.ts');

    expect(cssDefinitionFile).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.css.d.ts'));
  });

  it('should create swift icon name file', () => {
    const swiftFile = getStringFile('../dist/natds-icons.swift');

    expect(swiftFile).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.swift'));
  });

  describe('font files', () => {
    it('should create eot font', () => {
      const eotFont = getStringFile('../dist/fonts/natds-icons.eot');

      expect(eotFont).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.eot'));
    });

    it('should create svg font', () => {
      const svgFont = getStringFile('../dist/fonts/natds-icons.svg');

      expect(svgFont).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.svg'));
    });

    it('should create ttf font', () => {
      const ttfFont = getStringFile('../dist/fonts/natds-icons.ttf');

      expect(ttfFont).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.ttf'));
    });

    it('should create woff font', () => {
      const woffFont = getStringFile('../dist/fonts/natds-icons.woff');

      expect(woffFont).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.woff'));
    });

    it('should create woff2 font', () => {
      const woff2Font = getStringFile('../dist/fonts/natds-icons.woff2');

      expect(woff2Font).toMatchFile(path.join(__dirname, '__file_snapshots__/natds-icons.snap.woff2'));
    });
  });
});
