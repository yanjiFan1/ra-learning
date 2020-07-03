const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    }),
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
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
            presets: ["@babel/preset-env"],   // 转换规则
            cacheDirectory: true//利用缓存，提高性能，babel is slow
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
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use:[
          // MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options:{ //options、query不能和loader数组一起使用
              lessOptions: {
                javascriptEnabled: true
              } 
            },
          }
        ],
        exclude: /node_modules/
        // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'happypack/loader?id=happyStyle'}),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [resolve('../src')],
        use:[
          { 
            loader: "url-loader",
            options: {
              limit: 8192,
              name: 'img/[name].[hash:4].[ext]'
            }
          },
          { loader: "file-loader" }
        ]
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
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      // '@': path.join(__dirname, '../src'),
    },
  },
};