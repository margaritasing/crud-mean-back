const mongoose  = require("mongoose");
require('dotenv').config({path:'.env'});

const conectarDb = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true           
        })

        console.log('DB conectada')
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = conectarDb;




