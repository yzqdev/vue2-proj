/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs'),
        port: 7005,
        clientLogLevel: 'none',
        hot: true,
        // open: false,
        inline: true,
        compress: true,
        historyApiFallback: true,
    },
    entry: {
        index: ['./docs/src/main.js'],
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].[hash:5].js',
        publicPath: '/',
        chunkFilename: '[name].[chunkhash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'vue-style-loader!css-loader',
                            less: 'vue-style-loader!css-loader!less-loader'
                        },
                    }
                },
                { loader: 'kui-loader', options: { prefix: false } }
                ]
            },
        ]
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new VueLoaderPlugin(), //for vue-loader 15
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({ DEVELOPMENT: JSON.stringify(true) }),
        // 位于开发环境下
        // 自动生成html插件，如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面
        new HtmlWebpackPlugin({
            favicon: path.join(__dirname, '../docs/src/assets/favicon.png'),
            // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
            filename: 'index.html',
            // 源文件，路径相对于本文件所在的位置
            template: path.resolve(__dirname, '../docs/src/index.html'),
            // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
            chunks: ['vendors', 'index'],
            // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
            inject: 'body',
            // 生成html文件的标题
            title: 'KUI 使用文档'
            // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
            // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
        }),
    ]
})
