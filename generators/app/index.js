'use strict';
const Generator = require('yeoman-generator');
const slugify = require('slugify');
const randomstring = require('randomstring');

module.exports = class extends Generator {
  prompting() {
    this.props = {};

    return this._firstStage()
      .then(props => {
        this.props = Object.assign(this.props, props);
        this.config.set('project-name', props.name);
        return this._secondStage(props);
      })
      .then(props => {
        this.props = Object.assign(this.props, props);
        this.config.set('project-slug', props.slug);
        console.log('done', this.props);
      });
  }

  _firstStage() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide a project name',
        default: this.appname
      }
    ];

    return this.prompt(prompts);
  }

  _secondStage(props) {
    const prompts = [
      {
        type: 'input',
        name: 'slug',
        message: 'Please provide a project slug',
        default: slugify(props.name.toLowerCase())
      }
    ];

    return this.prompt(prompts);
  }

  writing() {
    let replaceFields = {
      // Project information
      projectSlug: this.config.get('project-slug'),
      projectName: this.config.get('project-name'),

      // Random strings for WP
      randString1: randomstring.generate(32),
      randString2: randomstring.generate(32),
      randString3: randomstring.generate(32),
      randString4: randomstring.generate(32),
      randString5: randomstring.generate(32),
      randString6: randomstring.generate(32),
      randString7: randomstring.generate(32),
      randString8: randomstring.generate(32)
    };

    // Copy files
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), replaceFields);
    this.fs.copyTpl(this.templatePath('.*'), this.destinationPath(), replaceFields);
    this.fs.copyTpl(
      this.templatePath('.hypress'),
      this.destinationPath('.hypress'),
      replaceFields
    );
  }
};
