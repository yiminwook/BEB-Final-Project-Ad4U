const { list, create, main, detail} = require('../controller/ad');
const express = require('express');
const router = express.Router();


router.get('/main', main);
router.get('/list', list);
router.get('/detail', detail);
router.post('/create', create);

module.exports = router;