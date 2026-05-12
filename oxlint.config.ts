import oxlintConfig from '@readme/oxlint-config';
import oxlintConfigVitest from '@readme/oxlint-config/testing/vitest';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [oxlintConfig],
  options: {
    reportUnusedDisableDirectives: 'error',
  },
  ignorePatterns: ['coverage/', 'src/'],
  categories: {
    suspicious: 'error',
  },
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['test/**/*.test.{js,ts}'],
      ...oxlintConfigVitest,
      rules: oxlintConfigVitest.rules,
    },
  ],
});
