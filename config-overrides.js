const path = require('path');

module.exports = function override(config, env) {
  // Add the alias to the Webpack config
  config.resolve.alias['@'] = path.resolve(__dirname, 'src');

  // Return the modified configuration
  return config;
};
