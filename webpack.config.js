const path = require("path");
module.exports={
  context:__dirname+"/src/js",
  entry:'./index.js',
  mode:'development', //'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env','react'],
        }
      },
      {
          test: /\.css$/,
          exclude: /node_modules/,
          //include: path.join(__dirname, '/node_modules/antd'),
          use:[
            {loader: 'style-loader'},
            {
              loader:'css-loader',
              options:{
                modules:true
              }
            },
          ]

      },
      {
          test: /\.css$/,
          include:/node_modules/,
          use: [
                   {
                     loader: "style-loader"
                   },
                   {
                     loader: "css-loader",
                    },
               ],
        },
    ]
  },
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
  }
}
