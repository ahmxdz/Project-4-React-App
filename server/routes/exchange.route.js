const express = require('express');
const router = express.Router();
const exchangeCtrl = require('../controllers/exchange.controller')

router.get('/', exchangeCtrl.index)
router.get('/:id', exchangeCtrl.show)
router.post('/', exchangeCtrl.createExchange)





module.exports = router