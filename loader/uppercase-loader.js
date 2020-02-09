module.exports = function(src) {
  if (src) {
    console.log('[uppercase-loader] input:', src);
    src = src.toUpperCase();
    console.log('[uppercase-loader] output:', src);
  }
  return `module.exports = \`${src}\``;

  // 返回JavaScript源码，必须是String或者Buffer
  // 还有一种写法
  // this.callback(null, `module.exports = \`${result}\``);
  // return;
};
