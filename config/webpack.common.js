const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('../src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 'babel-loader' is also a legal name to reference  
          options: {  
            presets: ["@babel/preset-env"]   // 转换规则
          }
        }
      },
      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        loaders:['style-loader', 'css-loader', 'less-loader'],
        // exclude: /node_modules/,
        // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'happypack/loader?id=happyStyle'}),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
};