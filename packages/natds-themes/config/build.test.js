import { build } from './build';
import * as buildDictionary from './shared/buildDictionary';

describe('build', () => {
  it('should build the output for all platforms', () => {
    console.log = jest.fn();

    const buildSpy = jest
      .spyOn(buildDictionary, 'buildDictionary')
      .mockImplementation(jest.fn());

    build();

    expect(buildSpy).toHaveBeenCalled();
  });
});
