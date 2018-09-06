const express = require("express");
const router = express.Router();
let itemController = require('../controller/itemController');

router.post('',itemController.addItem);
router.post('/part/:id')
router.delete('/:id',itemController.deleteItem);
router.get('/:id',itemController.getItemInfo);

module.exports = router;