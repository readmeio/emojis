const { expect } = require('chai');

const Emoji = require('../src').emoji;

const emojis = new Emoji();

describe('emojis', function () {
  it('should return true for an emoji that is supported', function () {
    expect(emojis.is('dog')).to.be.true;
  });

  it('should return false for an emoji that is supported', function () {
    expect(emojis.is('waffles')).to.be.false;
  });

  it('unicode dump should be valid json and contain emojis', function () {
    // eslint-disable-next-line global-require
    const unicode = require('../unicode/index.json');
    expect(unicode.length).to.be.at.least(1000);
  });
});
