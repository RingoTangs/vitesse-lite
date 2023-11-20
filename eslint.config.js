import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {},
  unocss.configs.flat,
  {
    rules: {
      'no-template-curly-in-string': 'off',
    },
  },
)
