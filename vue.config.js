module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/horcrux-wallets/' : '/',
  devServer: {
    proxy: 'http://localhost:3000'
  }
}