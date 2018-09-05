module.exports = {
  plugins: [
    'relay',
    '@babel/transform-runtime',
    '@babel/transform-react-constant-elements',
    '@babel/transform-react-inline-elements',
    '@babel/transform-react-jsx',
    '@babel/external-helpers',
    'module:fast-async',
    'inline-react-svg',
    'lodash',
    'ramda',
    'hash-resolve',
    'module:faster.js',
    'transform-react-remove-prop-types',
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
      'root-import',
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
  presets: [['@babel/env', { targets: { node: 6 } }], '@babel/react', '@babel/flow'],
};
