const path = require('path')

module.exports = (env) => {
  let isProduction
  if (env.production === true) {
    isProduction = true
  } else if (env.production === undefined) isProduction = false

  return {
    entry: ['./src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist',
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/, // Check all extension, when run babel
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    // devtool: isProduction ? 'hidden-source-map' : 'inline-source-map',
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'public'),
        },
        {
          directory: path.join(__dirname, 'dist'),
        },
      ],
    },
  }
}
