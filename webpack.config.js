const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
 template: './src/index.html', // 指定要用到的模板文件
 filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
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
    plugins: [ htmlPlugin ], // plugins 数组是 webpack 打包期间会用到的一些插件列表
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { 
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
                use: 'url-loader?limit=16940'
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
            ]
    }
}