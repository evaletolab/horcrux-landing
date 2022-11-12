module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/horcrux-landing/' : '/',
  devServer: {
    proxy: 'http://localhost:3000'
  }
}