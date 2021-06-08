const tokenAcquisition = "https://dev-auth0.azurewebsites.net";
const webApi = "https://olinqua-linq-webapi-dev.azurewebsites.net";

module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      "/tokenApi": {
        target: tokenAcquisition,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/tokenApi": ""
        }
      },
      "/webApi": {
        target: webApi,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/webApi": ""
        }
      }
    }
  }
};
