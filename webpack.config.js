const path = require('path');
module.exports = {
    mode: 'development', // mode 用来指定构建模式，在开发阶段都指定为'development'
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js', // 输出文件的名称，
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { 
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
                use: 'url-loader?limit=16940'
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
            ]
    }
}