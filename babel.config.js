module.exports = {
  plugins: [
    'relay',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-jsx',
    'inline-react-svg',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
};
