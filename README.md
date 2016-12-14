# j2json
> A formatter to sort the keys of JSON files

[![Build Status](https://travis-ci.org/icecreamliker/j2json.svg?branch=master)](https://travis-ci.org/icecreamliker/j2json)
[![Coverage Status](https://coveralls.io/repos/github/icecreamliker/j2json/badge.svg?branch=master)](https://coveralls.io/github/icecreamliker/j2json?branch=master)

## Usage

Install with npm

```
npm i j2json
```

```javascript
var glob = require("glob")

// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
```