class DobobPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('DobobPlugin', (compilation) => {
      const source = compilation.assets['index.js'].source();

      const banner = ['/*', ' * 세계 도밥의 날', ' * ---11월 11일---', ' */'].join('\n');
      const newSource = banner + '\n' + source;

      compilation.assets['index.js'] = {
        source: () => newSource,
        size: () => newSource.length,
      };
    });
  }
}

module.exports = DobobPlugin;
