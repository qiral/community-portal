module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', './index.js'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
  },
}
