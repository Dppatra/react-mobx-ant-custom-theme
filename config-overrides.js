const { override, useBabelRc, addLessLoader } = require("customize-cra");
module.exports = override(
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      async: true
    },
    cssLoaderOptions: {
      modules: true
    },
    modifyVars: {
      "@primary-color": "blue",
      "@layout-sider-background": "#fff",
      "@layout-body-background": "#fbfbfb",
      "@layout-header-background": "#fbfbfb"
    }
  })
);
