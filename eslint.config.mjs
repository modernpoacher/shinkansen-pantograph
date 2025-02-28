import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'

export default [
  /**
   *  Standard config
   */
  standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  standard({
    files: [
      'src/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  standard({
    files: [
      'test/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }),
  /**
   *  TypeScript config
   */
  typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'src',
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        PantographTypes: 'readonly'
      }
    }
  }),
  typescript({
    files: [
      'src/**/*.{mts,cts}',
      'test/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        PantographTypes: 'readonly'
      }
    }
  })
]
