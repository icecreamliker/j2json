# j2json
> A formatter to sort the keys of JSON files

[![Build Status](https://travis-ci.org/icecreamliker/j2json.svg?branch=master)](https://travis-ci.org/icecreamliker/j2json)
[![Coverage Status](https://coveralls.io/repos/github/icecreamliker/j2json/badge.svg?branch=master)](https://coveralls.io/github/icecreamliker/j2json?branch=master)

With **j2json**, you can format the json files according to the alphabetical order of their keys.

## Usage

Install with npm

```
npm i j2json --save
```

Format the json files
```javascript
'use strict';

const j2json = require('../index');

j2json({
    cwd: '/Users/yaolee/Desktop/unitedstack/j2json/examples',
    src: ['./files/'],
    dest: './dest/'
  },
  function(files) {
    // handle the files
  });
```

## License

*j2json* is available under the terms of [the MIT license](LICENSE).