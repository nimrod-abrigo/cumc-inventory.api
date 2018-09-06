let connection = require('../db');

let addItem = function(postData){
    return new Promise(function(resolve,reject){
        connection.query("INSERT INTO items SET ?"
        , [postData]
        , function(err, rows, fields) {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
}

let deleteItem = function(item_id){
    return new Promise(function(resolve,reject){
        connection.query("DELETE FROM items WHERE item_id = ?",[item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.addItem = addItem;
module.exports.deleteItem = deleteItem;