let itemService = require('../service/itemService');
let partsService = require('../service/partsService');

module.exports.addItem = async (req,res) => {
    const postData = req.body;
    let insertResult = {};
    insertResult.item = {};
    insertResult.parts = {};

    let itemInfo = {
        item_name : postData.item_name,
        item_description: postData.item_description,
        number_total: postData.number_total,
        number_available: postData.number_available,
        category_id: postData.category_id
    }
    let partsInfo = postData.parts;

    let insertItemResult = await itemService.addItem(itemInfo);
    let insertPartsResult = await partsService.addParts(partsInfo, insertItemResult.insertId);
    
    insertResult.item = insertItemResult;
    insertResult.parts = insertPartsResult;

    res.send(insertResult);
}

module.exports.deleteItem = async(req,res) => {
    const item_id = req.params.id;

    let deleteResult = {};
    deleteResult.item = {};
    deleteResult.parts = {};

    let deletePartsResult = await partsService.deletePartsbyItemId(item_id);
    let deleteItemResult = await itemService.deleteItem(item_id);
    
    deleteResult.parts = deletePartsResult;
    deleteResult.item = deleteItemResult;

    res.send(deleteResult);
}