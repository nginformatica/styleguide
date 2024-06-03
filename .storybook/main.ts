import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: [
        '../src/**/**/*.mdx',
        '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-styling-webpack',
        '@storybook/addon-themes',
        '@storybook/addon-webpack5-compiler-babel'
    ]
}

export default config
