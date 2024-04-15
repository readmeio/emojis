import { describe, it, expect } from 'vitest';

import { emoji as Emoji } from '../src';

const emojis = new Emoji();

describe('emojis', function () {
  it('should return true for an emoji that is supported', function () {
    expect(emojis.is('dog')).toBe(true);
  });

  it('should return false for an emoji that is supported', function () {
    expect(emojis.is('waffles')).toBe(false);
  });

  it('unicode dump should be valid json and contain emojis', function () {
    // eslint-disable-next-line global-require
    const unicode = require('../unicode/index.json');
    expect(unicode.length).toBeGreaterThanOrEqual(1000);
  });
});
