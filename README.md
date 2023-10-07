# @readme/emojis
[![Build](https://github.com/readmeio/emojis/workflows/CI/badge.svg)](https://github.com/readmeio/emojis)

A collection of all emojis supported on [ReadMe](https://readme.com).

[![](https://raw.githubusercontent.com/readmeio/.github/main/oss-header.png)](https://readme.io)

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
