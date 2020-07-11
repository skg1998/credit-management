const express = require('express');
const router = express.Router();
const transferController = require('../controller/transfer_cradit');

//transfer credit
router.get('/',transferController.transferCredit);
router.get('/credit_transfer/:id',transferController.creaditTransferData);

module.exports = router;