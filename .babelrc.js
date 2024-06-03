module.exports = {
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            'import',
            {
                libraryName: '@mui/icons-material',
                libraryDirectory: '',
                camel2DashComponentName: false
            },
            'icons'
        ]
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
    ]
}
