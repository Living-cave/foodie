const mongoose = require('mongoose');
     //url is from mongodb connect option

const mongoDB = async() =>{
     await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true  },async(err,result)=> {
        if(err) {console.log("---",err)}
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items"); //for connecting to specific folder of mongodb collection
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory"); //for connecting to specific folder of mongodb collection
                foodCategory.find({}).toArray( function(err,catData){
                    if(err) {console.log(err)}
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
            })
        }
        
    });
}

module.exports = mongoDB;


