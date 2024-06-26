const fs = require('fs');

const glob = require('glob');

const files = glob.sync('*.png', { cwd: 'src/img' });
const emojis = files.map(file => file.replace('.png', ''));

emojis.reverse();

const out = [
  '// Autogenerated by build.js; do not edit!',
  '',
  'function Emoji() {',
  `  this.emojis = ${JSON.stringify(emojis)};`,
  '  this.is = function(emoji) {',
  '    return this.emojis.indexOf(emoji) >= 0;',
  '  }',
  '};',
  'if(typeof exports !== "undefined") {exports.emoji = Emoji;}',
];

fs.writeFileSync('src/index.js', out.join('\n'));

console.log('Dist cache was rebuilt!');
