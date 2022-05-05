const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
      assets: resolve("src/assets"),
      components: resolve("src/components"),
    },
  },
};
