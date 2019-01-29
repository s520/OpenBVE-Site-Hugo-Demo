"use strict";
module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: ["./themes/openbve/static/assets/js/src/fallback.js"],
    output: {
        filename: "fallback.js",
        path: `${__dirname}/themes/openbve/static/assets/js/dist`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};
