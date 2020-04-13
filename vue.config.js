module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'GH_PAGES'
    ? '/admin-two-vue-bulma-dashboard/'
    : '/'
}
