module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'drawit.js',
        libraryTarget: 'var',
        library: 'DI'
      },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          }
        }
      ]
    },
  };