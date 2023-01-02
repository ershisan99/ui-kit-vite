import { allDecorators } from './decorators'
import '../src/styles/index.scss'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  theme: {
    selector: ':root',
    dataAttr: 'data-theme',
  },
}

export const decorators = allDecorators
