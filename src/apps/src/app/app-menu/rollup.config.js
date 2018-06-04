export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/compoplace.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.compoplace',
  globals: {
    '@angular/core': 'ng.core'
  }
}
