import { describe, expect, it } from 'vitest';

import { emoji as Emoji } from '../src/index.js';
import unicode from '../unicode/index.json';

const emojis = new Emoji();

describe('emojis', () => {
  it('should return true for an emoji that is supported', () => {
    expect(emojis.is('dog')).toBe(true);
  });

  it('should return false for an emoji that is supported', () => {
    expect(emojis.is('waffles')).toBe(false);
  });

  it('unicode dump should be valid json and contain emojis', () => {
    expect(unicode.length).toBeGreaterThanOrEqual(1000);
  });
});
