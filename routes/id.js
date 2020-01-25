const express = require('express');

const router = express.Router();

router.get('/:id', (req,res)=>{
    res.send("we are in id"+req.params.id);
    const itemId = req.params.id;
    const db = require("../db");
    const dbName = "test1";
    const collectionName = "test";
    db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
        dbCollection.findOne({ id: itemId }, (error, result) => { 
            try{
                if (error) throw error;
            }
            catch(err){
                console.log(err);
            }    // return item
            if(result!=null)
                console.log(result.name);
            else
                console.log("Not Found");
            //res.send(result);
        });
    });
});

module.exports = router;