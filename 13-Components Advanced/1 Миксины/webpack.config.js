var webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: [
        './mixins/script.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'script.js'
    },

    watch: false,

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/src|vue-router\//,
                loader: 'babel'
            },
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
}