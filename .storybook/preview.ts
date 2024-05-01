import { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        options: {
            storySort: {
                order: [
                    'Introduction',
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
        }
    }
}

export default preview
