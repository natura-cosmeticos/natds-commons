import iosElevations from '../ios/elevation.json';
import androidElevations from '../android/elevation.json';
import rnElevations from './elevation';

describe('React Native Elevation', () => {
  it('should return the ios and android elevations combined', () => {
    Object
      .keys(rnElevations.elevation)
      .forEach((elavationName) => {
        const expectedElevation = {
          ...iosElevations.elevation[elavationName],
          elevation: androidElevations.elevation[elavationName],
        };

        expect(rnElevations.elevation[elavationName]).toEqual(expectedElevation);
      });
  });
});
