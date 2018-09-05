let eventService = require('../service/eventService');

module.exports.getEventInfo = async (req,res) => {
    let eventid = req.params.id;
    let eventInfo = await eventService.getEventInfo(eventid);
    res.send(eventInfo);
};

module.exports.getEvents = async (req,res) => {
    let events = await eventService.getEvents();
    res.send(events);
}

module.exports.addEvent = async (req,res) => {
    const postData = req.body;
    let insertResult = await eventService.addEvent(postData);
    res.send(insertResult);
}

module.exports.editEvent = async (req,res) => {
    const event_id = req.params.id;
    const putData = req.body;
    let updateResult = await eventService.updateEvent(event_id, putData);
    res.send(updateResult);
}

module.exports.deleteEvent = async (req,res) => {
    const event_id = req.params.id;
    let deleteResult = await eventService.deleteEvent(event_id);
    res.send(deleteResult);
}