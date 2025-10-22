import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // ✅ ADICIONE ESTA SEÇÃO AQUI
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // Define a regra como um aviso (amarelo) em vez de um erro (vermelho)
        {
          "argsIgnorePattern": "^_", // Ignora argumentos de função que começam com '_'
          "varsIgnorePattern": "^_", // Ignora variáveis que começam com '_'
          "caughtErrorsIgnorePattern": "^_" // Ignora erros de catch que começam com '_'
        }
      ]
    }
  },
]);