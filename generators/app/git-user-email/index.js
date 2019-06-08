var gitconfig = require('git-config-path');
var parse = require('parse-git-config');
var extend = require('extend-shallow');

module.exports = function(options) {
  const gc = gitconfig(extend({ type: 'global' }, options && options.gitconfig));
  options = extend({ cwd: '/', path: gc }, options);
  const config = parse.sync(options) || {};
  return config.user ? config.user.email : null;
};
