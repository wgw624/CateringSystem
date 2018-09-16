const path = require("path");
module.exports={
  context:__dirname+"/src/js",
  entry:'./root.js',
  mode:'development', //'production',
  devServer:{
    // contentBase: 'dist/',
    // compress: true,
    // open:true,
    port: 8090
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // presets: ['babel-preset-env','react'],
           presets: ['react', 'es2015', 'stage-0'],
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
