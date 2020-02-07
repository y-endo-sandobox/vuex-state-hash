module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['vue', 'prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:vue/recommended', 'prettier/vue'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018
  },
  rules: {
    'no-var': 2,
    'no-console': 0,
    'no-debugger': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': 0,
    'vue/no-template-shadow': 0
  }
};
