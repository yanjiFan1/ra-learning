const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
console.log(path.join(__dirname + '/dist'))
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname + '/dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
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
      // {
      //   exclude: [
      //     /\.html$/,
      //     /\.(js|jsx)$/,
      //     /\.less$/,
      //     /\.css$/,
      //     /\.json$/,
      //     /\.bmp$/,
      //     /\.gif$/,
      //     /\.jpe?g$/,
      //     /\.png$/,
      //   ],
      //   loader: 'file-loader',
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // },
      // {
      //   test: /\.(css|less)$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // },
      // {

      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        test: /\.(css|less)$/,
        loaders:['style-loader', 'css-loader', 'less-loader']
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
        exclude: /node_modules/,
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
      // '@': path.join(__dirname, '../src'),
    },
  },
};