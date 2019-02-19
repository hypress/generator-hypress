'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-hypress:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      projectSlug: 'generator-test',
      projectName: 'generator test',

      randString1: 1,
      randString2: 2,
      randString3: 3,
      randString4: 4,
      randString5: 5,
      randString6: 6,
      randString7: 7,
      randString8: 8
    });
  });

  it('creates files', () => {
    assert.file([
      '.hypress',
      '.hypress/ansible',
      '.hypress/ansible/hypress.yml',
      '.hypress/ansible/settings.yml',

      '.hypress/htdocs',
      '.hypress/htdocs/wp-config.php',

      '.hypress/scripts',
      '.hypress/scripts/bundle.sh',
      '.hypress/scripts/pre-commit.sh',
      '.hypress/scripts/startup.sh',

      '.hypress/webpack.config.js',

      'src',
      'src/js',
      'src/js/index.js',

      'src/scss',
      'src/scss/index.scss',

      'src/hypress.php',
      'src/index.php',

      '.gitignore',
      '.travis.yml',
      'composer.json',
      'LICENSE',
      'package.json',
      'README.md',
      'Vagrantfile'
    ]);
  });
});
