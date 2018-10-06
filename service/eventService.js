let connection = require('../db');

let getEvents = function(){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM event", function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let getEventInfo = function(event_id){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM event WHERE event_id = ?",[event_id], function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let getEventItem = function(event_id){
    let sql = 'SELECT * FROM item_logs as log'; 
    sql += ' JOIN items as item on (item.item_id = log.item_id)'
    sql += ' WHERE log.log_id in ('
    sql += ' SELECT MAX(log_id) from item_logs'
    sql += ' WHERE event_id = ? GROUP BY item_id)';
    return new Promise(function(resolve,reject){
        connection.query(sql, [event_id], function(err, rows, fields){
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let addEvent = function(postData){
    return new Promise(function(resolve,reject){
        connection.query("INSERT INTO event SET ?"
        , [postData]
        , function(err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    });
}

let updateEvent = function(event_id, putData){
    return new Promise(function(resolve,reject){
        connection.query("UPDATE event SET ? WHERE event_id = ?",[putData,event_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let deleteEvent = function(event_id){
    return new Promise(function(resolve,reject){
        connection.query("DELETE FROM event WHERE event_id = ?",[event_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.getEvents = getEvents;
module.exports.getEventInfo = getEventInfo;
module.exports.getEventItem = getEventItem;
module.exports.addEvent = addEvent;
module.exports.updateEvent = updateEvent;
module.exports.deleteEvent = deleteEvent;