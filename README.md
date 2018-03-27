# webpack4-sample

这是一个最基础的webpack4示例，集合了React,css模块化，热加载。

使用前请先yarn 或 npm install安装依赖包

- 执行npm run build,可打包生产环境代码；
- 执行npm run server,可开启本地服务器，启动热替换，默认监听9601端口;


### webpack4 注意点：
1. webpack-cli必须，除了安装webpack外，还需安装webpack-cli
2. mode有development和production模式, production模式默认压缩js
3. css抽取处理，不支持extract-text-webpack-plugin， 改为mini-css-extract-plugin
4. html-webpack-plugin需要加上html-loader