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

14. 

html-loader 解析html模版

参考： 

https://www.jianshu.com/p/ce28ceddda72



#######搭建过程中遇到的问题######
1. 解析react如何引入babel
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev