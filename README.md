# sixa-wp-block-utils

A library of useful functions and components to be used across all sixa WordPress blocks.

## Installation
Before installing from NPM, make sure to add the sixa enterprise registry and sign in with your NPM user.
```
npm i @sixa/wp-block-utils
```

or 
```
npm i @sixa/wp-block-utils --save-dev
```
if you are using this library inside a plugin directly.

## Usage
After installing the package, all functions can be used as named imports.
E.g.:
```
import { normalizeZeroValues } from '@sixa/wp-block-utils';
```

---
## Setup Description
### Disclaimer
This section of the README file will be removed once we decided on the setup.

### Rollup.js VS Webpack
Due to the issues that we discussed and the confusion with the availability of functions from the module,
I have searched for an alternative to Webpack. Rollup.js is a module bundler that seems to be working
easier for our purposes. Also, given that we do not *need* anything from the webpack configuration from
WordPress and/or our boilerplates, I believe this simplifies things a lot.
Also, Rollup.js seems to be easier to work with externals / peer dependencies.

### Linters
Due to moving away from the previous Webpack and wp-scripts setup, I have set up eslint and stylelint
from scratch (but copied the presets/defaults from the WordPress rules). The configurations should
be identical.

### Build Process / Rollup Description
The project is built with

```
npm run build
```

which translates to 

```
rollup -c
```

which starts rollup with `rollup.config.js`.

Inside the configuration as well as the `package.json`, we defined `main`, `browser`, and `module` 
entrypoints. These entrypoints can be used in rollup and rollup builds the proper JS files with the
appropriate formats for us (Universal, CommonJS, and ES). This seems to be the major difference between
rollup and webpack. With webpack I as unable to build a proper ES module.

### Lodash-es
Now that we are creating an ES module as well as importing into an ES module, we need our dependencies to
be compatible with ES modules. Out of the box, `lodash` is not compatible with ES exports. This is because
some of the functions that can be imported are not actually exported (which is not an issue when building
for a different format). Thus, we replaced `lodash` with `lodash-es`.
An alternative would be to include from the proper packages:
e.g.
```
import { isEmpty }  from 'lodash/isEmpty';
```

instead of
```
import { isEmpty } from 'lodash';
```

We are using
```
import { isEmpty } from 'lodash-es';
```

which is just the ES module version of lodash and which has the convenient advantage, that we are actually only
importing (and possibly bundling) exactly the functions we call.

---

## Open Questions

### 1. How to deal with `PREFIX`?
There are some instances in blocks where we import a shared `PREFIX`,
which, in the past, incuded the project name. However, changing this `PREFIX` between all projects
   is cumbersome and may introduce additional complexities and issues. Thus, I suggest to either
   define a single `PREFIX` inside these utilities, such as `sixa-wp-blocks`, or, define a
   `PREFIX` for each block, which will then be used *internally* for naming and other purposes.
