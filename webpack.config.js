const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    entry: {
        'block-sama-gateway': './src/index.js'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    }
}