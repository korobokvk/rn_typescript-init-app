module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '~components': './src/components',
          '~screens': './src/screens',
          '~store': './src/store',
          '~navigation': './src/navigation',
          '~utils': './src/utils',
        },
      },
    ],
  ],
};
