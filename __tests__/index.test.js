const Emoji = require('../src').emoji;
const emojis = new Emoji();

test('should return true for an emoji that is supported', () => {
  expect(emojis.is('dog')).toBeTruthy();
});

test('should return false for an emoji that is supported', () => {
  expect(emojis.is('waffles')).toBeFalsy();
});

test('unicode dump should be valid json and contain emojis', () => {
  const unicode = require('../unicode/index.json');
  expect(unicode.length).toBeGreaterThanOrEqual(1000);
});
