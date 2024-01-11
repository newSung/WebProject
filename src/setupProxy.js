const { createProxyMiddleware } = require("http-proxy-middleware");

//로컬
// module.exports = function (app) {
//     app.use(
//         "/api",
//         createProxyMiddleware({
//             target: "http://localhost:3000",
//             changeOrigin: true,
//         })
//     );
// };

//배포
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app",
            changeOrigin: true,
        })
    );
};

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(createProxyMiddleware('/api', { target: "http://localhost:5000", changeOrigin: true }));
//     // app.use(createProxyMiddleware('/api', { target: "https://port-0-servertest-619z9h2lllkaic66.sel3.cloudtype.app", changeOrigin: true }));
// };

