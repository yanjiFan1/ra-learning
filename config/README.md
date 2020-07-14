1. 引入webpack

webpack
webpack-cli

2. 解析less/scss

less

less
less-loader：用于加载.less文件，将less转化为css  --save-dev
css-loader：用于加载.css文件，将css转化为commonjs  --save-dev
style-loader: 将样式通过<style>标签插入到head中 --save-dev

scss
sass-loader --save-dev
node-sass --save-dev
style-loader --save-dev
css-loader --save-dev

解析图片等文件
url-loader

加载图片 file-loader
假想现在我们正在下载 CSS，但是我们的背景和图标这些图片，要如何处理呢？使用 file-loader，我们可以轻松地将这些内容混合到 CSS中

参考： https://www.webpackjs.com/guides/asset-management/#loading-css


3. 解析react jsx
react --save 
react-dom --save
# react转码规则
@babel/preset-react --save-dev

4. 引入es6功能

# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

5. webpack-merge 合并配置文件的工具---webpack-merge区分生成环境和开发环境

1.首先将webpack-merge添加到项目中

npm install webpack-merge --save-dev
2.设置各个配置文件的连接

参考： 
1. https://blog.csdn.net/sd19871122/article/details/86498939
2. https://www.cnblogs.com/wangtong111/p/11197313.html


6. 插件

clean-webpack-plugin  删除dist文件夹

参考：
1. https://www.npmjs.com/package/clean-webpack-plugin
2. https://www.jianshu.com/p/7c3b0d114b84

7. 插件
html-webpack-plugin
1. 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
2. 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口

参考：
https://www.npmjs.com/package/html-webpack-plugin
https://segmentfault.com/a/1190000013883242
https://www.jianshu.com/p/08a60756ffda

8. UglifyJS Webpack Plugin 用来缩小（压缩优化）js文件，至少需要Node v6.9.0和Webpack v4.0.0版本

参考：
https://www.jianshu.com/p/b597ea88b165

9. webpack-dev-serve--webpack-dev-server是webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。

主要有两个功能：
1. 为静态文件提供服务
2. 自动刷新和热替换(HMR)

参考： 
https://segmentfault.com/a/1190000006670084

10. uglifyjs-webpack-plugin 压缩文件

参考：
1. https://www.jianshu.com/p/b597ea88b165
2. https://www.npmjs.com/package/uglifyjs-webpack-plugin

11. path 

12. babel-plugin-import

参考： 
https://blog.csdn.net/MFWSCQ/article/details/100828460

###loader### loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解
JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack的打包能力，对它们进行处理

babel-loader 的作用正是实现对使用了ES2015+语法的.js文件进行处理
@babel/core  的作用在于提供一系列api。这便是说，当webpack使用babel-loader处理文件时，babel-loader实际上调用了babel-core的api，因此也必须安装babel-core
@babel/preset-env 的作用是告诉babel使用哪种转码规则进行文件处理
@babel/preset-react

13. 
babel-plugin-transform-class-properties

14. html-loader 解析html模版

参考： 

https://www.jianshu.com/p/ce28ceddda72

15. mini-css-extract-plugin 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap

MiniCssExtractPlugin 参考： https://www.jianshu.com/p/91e60af11cc9

只能用在webpack4中，对比另一个插件 extract-text-webpack-plugin有点:

异步加载
不重复编译，性能更好
更容易使用
只针对CSS
目前缺失功能，HMR。



#### 重要优化模块 #####
1. webpack4 的热加载 https://www.jianshu.com/p/893058b6b17f

2. react-hot-loader  使用Webpack配置React项目中的热更新
	2.1 https://www.jianshu.com/p/244e1ffe7501
	2.2 https://blog.csdn.net/csm0912/article/details/87069764
	2.3 https://www.jianshu.com/p/dda3c7940b92




#######搭建过程中遇到的问题######
1. 解析react如何引入babel
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev

2. 警告入口点大小限制：以下入口点的组合资产大小超过了建议的限制（244 KiB）。 这可能会影响网络性能。

3. webpack踩坑系列之less-loader6.0.0的javascriptEnabled报错解决
参考： https://blog.csdn.net/wen81643956/article/details/105863548/

{
   loader: 'less-loader', 
   options: {
     javascriptEnabled: true 
   }
}

4. Error: options/query cannot be used with loaders (use options for each array item

options和loaders数组不能同时使用

参考 https://blog.csdn.net/liwenfei123/article/details/80389464

错误写法：
{
  test: /\.(css|less)$/,
  loaders:['style-loader', 'css-loader', 'less-loader'],
  options: {
    lessOptions: {
      javascriptEnabled: true
    } 
  }
  // exclude: /node_modules/,
  // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'happypack/loader?id=happyStyle'}),
},

正确写法:
{
  test: /\.(css|less)$/,
  use:[
    { loader: "eslint-loader" },
    { loader: "css-loader" },
    {
      loader:"less-loader",
      options:{//options、query不能和loader数组一起使用
        lessOptions: {
          javascriptEnabled: true
        } 
      },
    }
  ],
  exclude: /node_modules/
  // loader: ExtractTextPlugin.extract({fallback: 'style', use: 'happypack/loader?id=happyStyle'}),
},

5. webpack热加载控制台报错"Uncaught Error: [HMR] Hot Module Replacement is disabled."的解决办法
解决方案:
在执行webpack-dev-server命令时加上 --hot --inline命令即可

参考： https://blog.csdn.net/springlover1994/article/details/80973910

6. fs模块下载了但是还是找不到模块

解决方案：
	在webpack中添加：
	node: {
    fs: 'empty',
    net:'empty',
    tls:"empty"
   }