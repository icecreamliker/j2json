'use strict';

const j2json = require('../index');

j2json({
    cwd: './',
    src: ['./files/'],
    grep: /.lang./,
    dest: './dest/'
  },
  function(filelist) {
    console.log('Done!');
  });
