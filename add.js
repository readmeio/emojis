const sharp = require('sharp');
const path = require('path');

const prog = path.basename(process.argv[1]);
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log(`USAGE: ./${prog} <image> <emoji name>\n`)
  process.exit(-1);
}

const image = args.shift();
const emojiName = args.shift();

sharp(image).resize(null, 40).toFile(`./src/img/${emojiName}.png`, (err, info) => {
  if (err) {
    throw err;
  }

  console.log('🦉 Emoji resized and added!');
});
