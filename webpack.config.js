module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/lib",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + "/lib",
    },
    module: {
      loaders: [
          {
              loader: 'react-hot',
              test: /\.jsx?$/,
              include: __dirname + "/src",
          },
          {
              loader: 'babel-loader',
              test: /\.jsx?$/,
              include: __dirname + "/src",
              query: {
                  presets: ['es2015', 'react'],
              },
          }
      ]
    }
};
