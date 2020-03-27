const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss=require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin=require("uglifyjs-webpack-plugin");
const OUT_PUT_FILE ="/build";
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}
module.exports = {
    optimization:{
        minimizer:[
            new UglifyJsPlugin({//压缩JS
                cache:true,//是否时候缓存
                parallel:true,//并发打包
                sourceMap: true//
            }),
            new OptimizeCss()//压缩css
        ]
    },
    node:{
        fs:"empty"
    },
    devServer:{
        ////--mode development --hot --open --port 3000
        port:3000,
        progress:true,
        contentBase:"./build",
    },
    mode:'production', //打包模式：development开发者，生产者production
    entry: {
        index: resolve('./src/index.js'),
        // app:resolve('./app.js')
    },
    output: {
        path: __dirname + OUT_PUT_FILE,
        filename: 'static/js/[name].bundle.js',//首屏加载的文件
        chunkFilename: 'static/js/[name].chunk.js',//按需加载的文件
        globalObject: 'this'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",//配置babel
                    options: {
                        presets: [
                            '@babel/preset-react',//读懂react
                            '@babel/preset-env',//读懂es6
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",//读懂class
                            [
                                "@babel/plugin-transform-runtime",//runtime，没有会报错
                                {
                                    "absoluteRuntime": false,
                                    "corejs": false,
                                    "helpers": true,
                                    "regenerator": true,
                                    "useESModules": false,
                                    "version": "7.0.0-beta.0"
                                }
                            ],
                            [
                                "import",//antd样式按需加载
                                {
                                    "libraryName": "antd",
                                    "libraryDirectory": "es",
                                    "style": "css"
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    outputPath: 'img/'
                }
            },
            {
                test: /\.html$/,  //静态资源
                loader: 'html-loader'
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ],
    },
    resolve: {
        alias: {
            '@':path.resolve(__dirname,"src")
        }
    }
    ,
    plugins: [
        new HtmlWebPackPlugin({
            title:"React PWA",
            template: 'public/index.html',
            minify: {
                removeAttributeQuotes:true,//压缩双引号
                collapseWhitespace:true//压缩空白处
            },
            hash:true,
            chunks:["index"]
        }),
        new CopyWebPackPlugin([
            {
                from:__dirname + '/public',
                to:__dirname + OUT_PUT_FILE,
                ignore:["index.html"]
            }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[id].chunk.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    ]

};
