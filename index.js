export default class HtmlBeforeInjectPlugin {
  
  constructor(cb, args) {
    this.cb = typeof cb == 'function' ? cb : (data) => (data);
    this.args = Array.isArray(args) ? args : [];
  }

  apply(compiler) {

    compiler.hooks.compilation.tap('setVersion', (compilation) => {

      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        function (htmlPluginData) {
          this.cb(htmlPluginData, this.args);
        }
      );

    });

  }
}