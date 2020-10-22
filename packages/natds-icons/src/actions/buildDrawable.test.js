import svg2vectordrawable from 'svg2vectordrawable';
import { buildDrawable } from './buildDrawable';

jest.mock('svg2vectordrawable');

const data = {
  globalConfig: {
    fontName: 'font-name',
    outputPath: 'folder/name',
  },
  glyphsData: [
    {
      contents: '<svg><circle/></svg>',
      metadata: {
        name: 'icon-Name',
      },
    },
  ],
};

const drawable = `
<vector>
    <path
        android:pathData="M"/>
</vector>
`;

const expectedDrawable = `
<vector>
    <path
        android:fillColor="#FF000000"
        android:pathData="M"/>
</vector>
`;

describe('buildDrawable', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeEach(() => {
    svg2vectordrawable.mockReturnValue(Promise.resolve(drawable));
  });

  it('should call svg2vectordrawable with the given svgs', () => buildDrawable(data)
    .then(() => expect(svg2vectordrawable).toHaveBeenCalledWith('<svg><circle/></svg>')));

  it('should return the drawables outputs', () => buildDrawable(data)
    .then((response) => {
      const expectedResponse = {
        ...data,
        outputs: {
          icon_name: {
            content: expectedDrawable,
            outputPath: 'folder/name/drawables/icon_name.xml',
          },
          txt: {
            content: 'icon_name\n',
            outputPath: 'folder/name/font-name.txt',
          },
        },
      };

      expect(response).toEqual(expectedResponse);
    }));
});
