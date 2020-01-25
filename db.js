const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = 'mongodb+srv://kd_99:99_kd@cluster0-blilq.mongodb.net/test1?retryWrites=true&w=majority';

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, { useUnifiedTopology: true }, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            try{
            failureCallback(err);
            }
            catch(err){
                console.log(err);
            } // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};