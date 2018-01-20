# Reproducible Case For postcss-at-rules-variables Bug

[![Greenkeeper badge](https://badges.greenkeeper.io/MaxMilton/reproduce-postcssatrulesvars-bug.svg)](https://greenkeeper.io/)

## Overview

Minimal code to reproduce `postcss-at-rules-variables` bug: `TypeError: Cannot read property 'includes' of undefined`.

Last known working version of `postcss-at-rules-variables` is `0.1.2`, which does not throw this error and produces the expected result as shown below.

### Suspected cause

When a variable is inside a comment it will throw this error.

### Usage

Install dependencies:

```bash
npm install
# or
yarn
```

Run the code:

```bash
npm start
# or
yarn start
```

### Current result

```bash
$ npm start

> reproduce-postcssatrulesvars-bug@1.0.0 start /home/max/Development/LABS/reproduce-postcssatrulesvars-bug
> node ./index.js

(node:12570) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'includes' of undefined
    at hasVar (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss-at-rules-variables/lib/index.js:1:478)
    at resolveValue (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss-at-rules-variables/lib/index.js:1:536)
    at /home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss-at-rules-variables/lib/index.js:1:966
    at Array.reduce (<anonymous>)
    at circularReference (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss-at-rules-variables/lib/index.js:1:905)
    at /home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss-at-rules-variables/lib/index.js:1:1387
    at LazyResult.run (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss/lib/lazy-result.js:277:20)
    at LazyResult.asyncTick (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss/lib/lazy-result.js:192:32)
    at processing.Promise.then._this2.processed (/home/max/Development/LABS/reproduce-postcssatrulesvars-bug/node_modules/postcss/lib/lazy-result.js:231:20)
    at new Promise (<anonymous>)
(node:12570) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
```

### Expected result

```bash
$ npm start

> reproduce-postcssatrulesvars-bug@1.0.0 start /home/max/Development/LABS/reproduce-postcssatrulesvars-bug
> node ./index.js
```

## Licence

Code is released under MIT licence. See [LICENCE](https://github.com/MaxMilton/reproduce-esm-bug/blob/master/LICENSE).

-----

© 2018 [Max Milton](https://maxmilton.com)
