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

let editItem = function(item_id, putData){
    return new Promise(function(resolve,reject){
        connection.query("UPDATE items SET ? WHERE item_id = ?",[putData,item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let getItemInfo = function(item_id){
    let sql = "SELECT * FROM items WHERE item_id = ?";
    return new Promise(function(resolve,reject){
        connection.query(sql,[item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let getItemsByCategory = function(category_id){
    return new Promise(function(resolve,reject){
        connection.query("SELECT * FROM items WHERE category_id = ?",[category_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.addItem = addItem;
module.exports.deleteItem = deleteItem;
module.exports.editItem = editItem;
module.exports.getItemInfo = getItemInfo;
module.exports.getItemsByCategory = getItemsByCategory;