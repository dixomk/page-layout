var autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"index.js",
        path: './public/'
     },
     module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders:["style", "css", "postcss", "sass"]
            }
        ],
        postcss: function() {
            return [
                autoprefixer({ browsers: ['last 2 versions'] })
            ];
        }
    }
 };
