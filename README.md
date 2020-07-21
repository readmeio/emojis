# @readme/emojis
[![Build](https://github.com/readmeio/emojis/workflows/CI/badge.svg)](https://github.com/readmeio/emojis)

A collection of all emojis supported on [ReadMe](https://readme.com).

[![](https://d3vv6lp55qjaqc.cloudfront.net/items/1M3C3j0I0s0j3T362344/Untitled-2.png)](https://readme.io)

## Installation

```
npm install --save @readme/emojis
```

## Usage
```js
const Emoji = require('@readme/emojis').emoji;
const emojis = new Emoji();

if (emojis.is('dog')) {
  console.log('dog is supported');
}
```

## Contribution
To add a new emoji to this repository, run `node add.js`.

For example:

```shell
$ node add.js ~/Desktop/Mask.png.png owlbert-mask
🦉 Emoji resized and added!
```

### Rebuilding the dist cache
```
npm run dist
```
