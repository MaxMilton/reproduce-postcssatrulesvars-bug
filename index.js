'use-strict';

const fs = require('fs');
const postcss = require('postcss');
const atVariables = require('postcss-at-rules-variables');
const conditionals = require('postcss-conditionals');

fs.readFile('styles.css', (err, css) => {
  postcss([atVariables, conditionals])
    .process(css, { from: 'styles.css', to: 'output.css' })
    .then(result => {
      fs.writeFile('output.css', result.css);
    });
});
