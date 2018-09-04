module.exports = {
  plugins: [
    'relay',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-jsx',
    'inline-react-svg',
    [
      'transform-imports',
      {
        'react-bootstrap': {
          transform: member => `react-bootstrap/lib/${member}`,
          preventFullImport: true,
        },
        lodash: {
          transform: member => `lodash/${member}`,
          preventFullImport: true,
        },
      },
    ],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '^',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '#',
            rootPathSuffix: 'src/data',
          },
          {
            rootPathPrefix: '@',
            rootPathSuffix: 'src/components',
          },
          {
            rootPathPrefix: '$',
            rootPathSuffix: 'src/mutations',
          },
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src/subscriptions',
          },
        ],
      },
    ],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
};
