var mongoClient = require("mongodb").MongoClient;
var connectionstring = "mongodb://127.0.0.1:27017";
mongoClient.connect(connectionstring, function(err, clientobj){
    if(!err){
        console.log("connected");
    }
    else{
        console.log(err.message);
    }
})   