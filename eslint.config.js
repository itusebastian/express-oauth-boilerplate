import globals from 'globals';
import pluginNode from 'eslint-plugin-node';
import prettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginNode.configs['flat/recommended'],
  prettier
];
