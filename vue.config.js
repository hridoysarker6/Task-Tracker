module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        longLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
