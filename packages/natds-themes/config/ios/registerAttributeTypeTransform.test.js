import { registerAttributeTypeTransform } from './registerAttributeTypeTransform';
import * as helpers from '../shared/helpers';

describe('registerAttributeTypeTransform', () => {
  it('should return the transformer config', () => {
    const config = registerAttributeTypeTransform();
    const expectedConfig = {
      name: 'attribute/type',
      transformer: expect.any(Function),
      type: 'attribute',
    };

    expect(config).toMatchObject(expectedConfig);
  });

  describe('transformer', () => {
    it('should add the customOptions object when the prop is fontWeight', () => {
      const config = registerAttributeTypeTransform();
      const prop = {
        attributes: { category: 'typography' },
        name: 'typographyFontWeightSmall',
        original: {
          value: 500,
        },
        path: [
          'typography',
          'fontWeight',
          'small',
        ],
        value: '.medium',
      };

      const result = config.transformer(prop);
      const expectedResult = {
        customOptions: {
          includeType: true,
          type: 'UIFont.Weight',
        },
      };

      expect(result).toEqual(expectedResult);
    });

    it('should add the customOptions object', () => {
      jest
        .spyOn(helpers, 'isProp')
        .mockReturnValue(() => false);

      const config = registerAttributeTypeTransform();
      const prop = {
        attributes: { category: 'spacing' },
        name: 'spacingSmall',
        original: {
          value: 8,
        },
        path: [
          'spacing',
          'small',
        ],
        value: 8,
      };

      const result = config.transformer(prop);
      const expectedResult = {
        customOptions: {
          includeType: true,
          type: 'CGFloat',
        },
      };

      expect(result).toEqual(expectedResult);
    });
  });
});
