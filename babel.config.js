module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.ts', '.js'],
                alias: {
                    '@modules': './src/modules',
                },
            },
        ],
        '@babel/plugin-proposal-class-properties',
    ],
    ignore: ['node_modules', '__tests__'],
}
