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
        number_available: postData.number_total,
        category_id: postData.category_id,
        //created_date: new Date()
    }
    let partsInfo = postData.parts;

    let insertItemResult = await itemService.addItem(itemInfo);
    insertResult.item = insertItemResult;
    
    if(partsInfo != ''){
        let insertPartsResult = await partsService.addParts(partsInfo, insertItemResult.insertId);
        insertResult.parts = insertPartsResult;
    }

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

module.exports.deletePart = async(req,res) => {
    const part_id = req.params.id;

    let deleteResult = await partsService.deletePartbyPartId(part_id);

    res.send(deleteResult);
}

module.exports.editItem = async(req,res) => {
    const putData = req.body;
    const item_id = req.params.id;

    let editResult = await itemService.editItem(item_id,putData);

    res.send(editResult);
}

module.exports.editPart = async(req,res) => {
    const putData = req.body;
    const part_id = req.params.id;

    let editResult = await partsService.editPart(part_id,putData);

    res.send(editResult);
}

module.exports.addParts = async(req,res) => {
    const postData = req.body;
    const item_id = req.params.id;

    let insertPartsResult = await partsService.addParts(postData,item_id);

    res.send(insertPartsResult);
}

module.exports.getItemInfo = async(req,res) => {
    const item_id = req.params.id;
    
    let result = {};

    let getItemResult = await itemService.getItemInfo(item_id);
    let getPartsResult = await partsService.getPartByItemId(item_id);

    result = getItemResult.map(
        (getItemResult)=>{
            getItemResult.parts=getPartsResult;
            return getItemResult;
        }
    )

    res.send(result);
}

module.exports.getItems = async(req,res) => {
    let getItemsResult = await itemService.getItems();
    res.send(getItemsResult);
}