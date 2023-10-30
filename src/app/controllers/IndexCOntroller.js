class IndexController {
    index(req, res) {
        res.render('home')
    }
}

module.exports = new IndexController;
