'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const jsonSortify = require('json.sortify');

function sortJSON(file, dest) {
  fs.readFile(file, 'utf8',(err, data) => {
    if (err) {
      throw err;
    }
    let content = jsonSortify(JSON.parse(data), null, 2);
    fs.writeFileSync(file, content);
  });
}

let j2json = function(options, callback) {
  let cwd = options.cwd;
  let src = options.src;
  let dest = options.dest;
  let grep = options.grep;
  let fileList = [];

  for (let i = 0, len = src.length; i < len; i++) {
    if (!path.isAbsolute(src[i]) && cwd) {
      src[i] = path.join(cwd, '**', src[i], '*.json');
      console.log(src[i])
    }

    let files = glob.sync(src[i], {});
    Array.prototype.push.apply(fileList, files);

    files.forEach((file) => {
      if(!grep.test(file)) {
        return;
      }
      console.log(file);
      dest = path.resolve(cwd, dest);
      sortJSON(file, dest);
    });
  }

  if (callback) {
    callback(fileList);
  }

};

module.exports = j2json;
