module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@components': './src/ui/components',
            '@api': './src/api',
            '@navigation': './src/navigation',
            '@screens': './src/ui/screens',
            '@modules': './src/modules',
            '@images': './res/images',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
    exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
  };
};
