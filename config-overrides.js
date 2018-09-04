const rewireMobX = require('react-app-rewire-mobx');
const rewirePreact = require('react-app-rewire-preact');
const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  let cf = config;
  // add a plugin
  cf = injectBabelPlugin('babel-plugin-relay', cf);

  // use the Preact rewire
  if (env === 'production') {
    console.log('⚡ Production build with Preact');
    cf = rewirePreact(cf, env);
  }

  // use the MobX rewire
  cf = rewireMobX(cf, env);

  return cf;
};
