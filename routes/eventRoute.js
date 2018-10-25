const express = require("express");
const router = express.Router();
const eventController = require('../controller/eventController');

router.get('/:id',eventController.getEventInfo);
router.get('',eventController.getEvents);
router.put('/:id',eventController.editEvent);
router.post('',eventController.addEvent);
router.delete('/:id',eventController.deleteEvent);
router.get('/item/:id',eventController.getEventItemStatus);

module.exports = router;