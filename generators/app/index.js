'use strict';
const Generator = require('yeoman-generator');
const slugify = require('slugify');

module.exports = class extends Generator {
  prompting() {
    this._firstStage()
      .then(props => {
        this.config.set('project-name', props.name);
        return this._secondStage(props);
      })
      .then(props => {
        this.config.set('project-slug', props.slug);
        console.log('done', props);
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
};
