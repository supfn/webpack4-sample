// 1.创建一个 JavaScript 命名函数。
function FileListPlugin(options) {
  // 使用 options 设置插件实例……
}

// 2.在插件函数的 prototype 上定义一个 apply 方法。
FileListPlugin.prototype.apply = function(compiler) {

  // 3.指定一个绑定到 webpack 自身的事件钩子。
  compiler.plugin("emit", function(compilation, callback) {

    // 4.处理 webpack 内部实例的特定数据。
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        console.log(filelist);
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    // 功能完成后调用 webpack 提供的回调。
    callback();
  })
};

module.exports = FileListPlugin;
