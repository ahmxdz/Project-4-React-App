const express = require('express');
const router = express.Router();
const exchangeCtrl = require('../controllers/exchange.controller')

router.get('/', exchangeCtrl.index)
router.get('/:id', exchangeCtrl.show)





module.exports = router