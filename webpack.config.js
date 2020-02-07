const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
  mode: mode,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public/assets/js/')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    open: false,
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    historyApiFallback: true,
    writeToDisk: true
  },
  plugins: [new VueLoaderPlugin()]
};
