const path = require('path');

module.exports = {
    entry: './src/homework.ts',
    module: {
        rules: [
            {
                test: /\.ts$/ ,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // production
}