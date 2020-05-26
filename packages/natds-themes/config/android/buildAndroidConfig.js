const buildAndroidConfig = brand => ({
  buildPath: `build/android/${brand}/`,
  files: [
    {
      destination: 'theme_attributes.xml',
      format: 'android/attributes',
    },
  ],
  transformGroup: 'android',
  transforms: ['name/cti/camel'],
});

export default buildAndroidConfig;
