const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/sudoku/**', { target: 'http://localhost:5000' }));
}