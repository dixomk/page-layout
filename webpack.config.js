var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
console.log(__dirname);
module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        filename:"index.js",
        path: './public/'
     },
     resolve: {
       extensions: ['', '.js'],
     },
     module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders:["style", "css", "postcss", "sass"]
            },
            {
                test: /\.jpg$|\.png$/,
                loader:"file-loader?name=./img/[name].[ext]"
            }
        ],
        postcss: function() {
            return [
                autoprefixer({ browsers: ['last 2 versions'] })
            ];
        }
    },
    plugins:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
 };
