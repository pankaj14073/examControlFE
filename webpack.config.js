var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            { 
              test: /\.png$/, 
              loader: "url-loader?limit=100000" 
            },
            { 
              test: /\.jpg$/, 
              loader: "file-loader" 
            },
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'file'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
              loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
            
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object   
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}