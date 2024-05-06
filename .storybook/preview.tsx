import React from 'react'
import { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeProviderFlipper } from 'flipper-ui'
import { muiThemeOptions, theme } from 'flipper-ui/theme'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles
    })
]

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        options: {
            storySort: {
                order: [
                    'Getting Started', ['Welcome', 'Introduction'],
                    'Web',
                    ['Introduction', 'Usage Guide', 'Design', 'Components'],
                    'Mobile',
                    ['Introduction', 'Usage Guide', 'Design', 'Components']
                ]
            }
        },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        decorators: [
            Story => (
                <ThemeProvider theme={theme}>
                    <ThemeProviderFlipper options={muiThemeOptions}>
                        <Story />
                    </ThemeProviderFlipper>
                </ThemeProvider>
            )
        ]
    }
}

export default preview
