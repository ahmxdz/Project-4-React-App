const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/api.controller')

router.post('/:id', apiCtrl.convertCurrency)

module.exports = router