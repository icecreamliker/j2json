"use strict";

const tap = require('tap');
const j2json = require('../index');

tap.equal(j2json(), 1);
