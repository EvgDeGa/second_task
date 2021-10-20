const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const filename = () => `[name].[ext]`

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname,'../dist'),
    assets: 'assets/'
}
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(`.pug`))
//
// const plugins = () => {
//     const basePlugins = [
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery',
//         }),
//         new MiniCssExtractPlugin({
//             filename: `./css/${filename('css')}`
//         }),
//         new CopyWebpackPlugin({
//             patterns: [
//                 {from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'app')}
//             ]
//         }),
//         ...PAGES.map(page => new HtmlWebpackPlugin({
//             template: `${PAGES_DIR}/${page}`,
//             filename: `./${page.replace(/\.pug/, '.html')}`
//         }))
//     ];
//     return basePlugins;
// };

module.exports ={
    // context: path.resolve(__dirname, 'src'),
    // entry: './index.js',
    // output: {
    //     filename: `.assets/js/${filename('js')}`,
    //     path: path.resolve(__dirname, 'dist'),
    //     publicPath: ''
    // },
    externals: {
        paths: PATHS
    },

    entry:  {
        app: PATHS.src
    },

    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    // plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.(?:|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: `.assets/fonts/${filename('[ext]')}`
                }
            },
            {
                test: /\.(?:|png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: `.assets/img/${filename('[ext]')}`
                }
            },
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),

        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),

        new CopyWebpackPlugin({
            patterns:[
                {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
                {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`}
            ]
        }),

        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))

    ]
}