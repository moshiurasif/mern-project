const { default: mongoose } = require("mongoose");

const dbConnect = () =>{
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected");
    } catch (error) {
        // throw new Error(error)
        console.log("database not connected");
    }

}

module.exports = dbConnect;