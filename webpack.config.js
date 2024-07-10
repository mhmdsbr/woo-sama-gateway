const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'block-sama-gateway': './src/index.js'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            // Add rule for processing CSS files
            {
                test: /\.css$/,
                use: [
                    'style-loader',  // Injects CSS into the DOM
                    'css-loader'     // Turns CSS into CommonJS
                ]
            },
            // Add rule for processing SVG files
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            // Add rule for processing PNG files
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/,
                type: 'asset/resource'
            }
        ]
    }
};
