import { describe, expect, it } from 'vitest';

import { emoji as Emoji } from '../src/index.js';

const emojis = new Emoji();

describe('emojis', () => {
  it('should return true for an emoji that is supported', () => {
    expect(emojis.is('dog')).toBe(true);
  });

  it('should return false for an emoji that is supported', () => {
    expect(emojis.is('waffles')).toBe(false);
  });

  it('unicode dump should be valid json and contain emojis', () => {
    const unicode = require('../unicode/index.json');
    expect(unicode.length).toBeGreaterThanOrEqual(1000);
  });
});
