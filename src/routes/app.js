const express = require('express');
const router = express.Router();
const indexController = require('../app/controllers/IndexCOntroller');

router.use('/', indexController.index);

module.exports = router;
