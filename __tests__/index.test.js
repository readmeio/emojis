const Emoji = require('../src').emoji;

const emojis = new Emoji();

test('should return true for an emoji that is supported', () => {
  expect(emojis.is('dog')).toBe(true);
});

test('should return false for an emoji that is supported', () => {
  expect(emojis.is('waffles')).toBe(false);
});

test('unicode dump should be valid json and contain emojis', () => {
  // eslint-disable-next-line global-require
  const unicode = require('../unicode/index.json');
  expect(unicode.length).toBeGreaterThanOrEqual(1000);
});
