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
