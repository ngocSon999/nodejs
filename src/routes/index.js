const appRouter = require('./app')
const newsRouter = require('./news')
function route(app) {
    app.use('/news', newsRouter)
    app.use('/', appRouter)
}

module.exports = route;

