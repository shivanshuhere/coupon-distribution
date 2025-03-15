import path from "path";

export default {
    entry : "./index.js",
    output : {
        filename:"bundle.js",
        path:path.resolve(process.cwd(),"dist"),
    },
    module : {
        rules : [{
            test : /\.js$/,
            exclude :/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"],
                },
            },
            
        },],
    },
};