const config = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devtool: "source-map"
};

module.exports = config;