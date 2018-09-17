const express = require("express");
const router = express.Router();
let itemController = require('../controller/itemController');

router.post('',itemController.addItem);
router.post('/part/:id',itemController.addParts);
router.put('/:id',itemController.editItem);
router.put('/part/:id',itemController.editPart);
router.delete('/:id',itemController.deleteItem);
router.delete('/part/:id',itemController.deletePart);
router.get('/:id',itemController.getItemInfo);
router.get('',itemController.getItems);

module.exports = router;

//const dateTimeFormat = 'YYYY-MM-DD"T"HH24:MI:SS"Z"';