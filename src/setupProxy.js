// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//     app.use(
//         "/api",
//         createProxyMiddleware({
//             target: "http://localhost:5000",
//             changeOrigin: true,
//         })
//     );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // app.use(createProxyMiddleware('/api', { target: "http://localhost:5000", changeOrigin: true }));
    app.use(createProxyMiddleware('/api', { target: "https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app", changeOrigin: true }));
};

