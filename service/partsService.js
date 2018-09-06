let connection = require('../db');

let addParts = function(postData,item_id){
    let tmp_values = [];
    for(var i=0; i< postData.length; i++)
        tmp_values.push([postData[i].part_name, item_id, postData[i].part_description]);
    
    let sql = "INSERT INTO item_part (part_name,item_id,part_description) VALUES ?";
    
    return new Promise(function(resolve,reject){
        connection.query(sql, [tmp_values]
        , function(err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    });
}

let deletePartsbyItemId = function(item_id){
    return new Promise(function(resolve,reject){
        connection.query("DELETE FROM item_part WHERE item_id = ?",[item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let deletePartbyPartId = function(part_id){
    return new Promise(function(resolve,reject){
        connection.query("DELETE FROM item_part WHERE part_id = ?",[item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let editPart = function(part_id,putData){
    return new Promise(function(resolve,reject){
        connection.query("UPDATE item_part SET ? WHERE part_id = ?",[putData,part_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

let getPartByItemId = function (item_id){
    let sql = "SELECT * FROM item_part WHERE item_id = ?";
    return new Promise(function(resolve,reject){
        connection.query(sql,[item_id],function(err,rows,fields){
            if(err) return reject(err);
            return resolve(rows);
        });
    });
}

module.exports.addParts = addParts;
module.exports.deletePartsbyItemId = deletePartsbyItemId;
module.exports.deletePartbyPartId = deletePartbyPartId;
module.exports.editPart = editPart;
module.exports.getPartByItemId = getPartByItemId;