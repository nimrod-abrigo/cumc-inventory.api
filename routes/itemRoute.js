const express = require("express");
const router = express.Router();
let itemController = require('../controller/itemController');

router.post('',itemController.addItem);
router.delete('/:id',itemController.deleteItem);

module.exports = router;