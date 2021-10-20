const {merge} = require('webpack-merge')
const commonWebpackConfig = require('./webpack.common')


module.exports  = merge(commonWebpackConfig,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: commonWebpackConfig.externals.paths.dist,
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3001
    }
})
