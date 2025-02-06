const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"], // Укажи пути, которые нужно проксировать
    createProxyMiddleware({
      target: "http://localhost:5001", // Адрес бэкенда
    })
  );
};
