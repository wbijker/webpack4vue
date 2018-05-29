const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // Ensure JS transpilation is applied to Vue SFCs in node_modules
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                  )
            },
            {
                test: /\.css$/,
                use: [
                'vue-style-loader',
                'css-loader'
                ]
            },
            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // Instead of using pug-loader, we need to use a loader that returns 
            // the raw HTML string, e.g. pug-plain-loader
            // webpack.config.js -> module.rules
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}