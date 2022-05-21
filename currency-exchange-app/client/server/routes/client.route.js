const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/client.controller')


router.post('/', clientCtrl.createClient)



module.exports = router