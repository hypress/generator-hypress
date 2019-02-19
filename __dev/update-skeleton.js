const request = require('request');
const fs = require('fs');
var AdmZip = require('adm-zip');
var ncp = require('ncp').ncp;

function downloadFile() {
  request('https://github.com/hypress/project-skeleton/archive/v0.0.3.zip')
    .pipe(fs.createWriteStream('./__dev/hypress-skeleton.zip'))
    .on('close', function() {
      extractFile();
    });
}

function extractFile() {
  let zip = new AdmZip('./__dev/hypress-skeleton.zip');
  let zipEntries = zip.getEntries();
  let subfolder = zipEntries[0].entryName;
  zip.extractAllTo('./__dev/_tmp/', true);
  copyToTemplate(subfolder);
}

function copyToTemplate(subfolder) {
  ncp('./__dev/_tmp/' + subfolder, './generators/app/templates');
}

downloadFile();
