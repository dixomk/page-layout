var autoprifixer = require("autoprefixer");

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
                loaders:["style","css","sass"]
            }
        ]
    }
 };
