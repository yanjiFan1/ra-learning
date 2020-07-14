const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  // entry: {
  //   app: './src/index.js'
  // },
  entry: [
    // 开启react代码的模块热替换（HMR）
    'react-hot-loader/patch',
    // 为webpack-dev-server的环境打包好运行代码
    // 然后连接到指定服务器域名与端口, 这里的端口为自己项目的端口
    'webpack-dev-server/client?http://localhost:8082/',
    // 为热替换（HMR）打包好运行代码
    // only- 意味着只有成功更新运行代码才会执行热替换（HMR）
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
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
        test: /\.(woff|eot|ttf|svg|gif|ico)$/,
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
      '@': path.join(__dirname, '../src'),
    },
  },
  node: {
    fs: 'empty',
    net:'empty',
    tls:"empty"
   }
};