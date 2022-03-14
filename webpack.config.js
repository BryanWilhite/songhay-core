const path = require('path');

const webpack = require('webpack');

const TerserJSPlugin = require('terser-webpack-plugin');

const sharedConfig = {
    entry: {
        scripts: [
            './src/index.ts',
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

const defaultConfig = {
    name: 'default-config',
    output: {
        filename: 'songhay.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

const optimizationConfig = {
    name: 'optimization-config',
    output: {
        filename: 'songhay.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [new TerserJSPlugin({})],
    },
};

module.exports = [
    {...sharedConfig,...defaultConfig},
    {...sharedConfig,...optimizationConfig},
];