const mongoose = require('mongoose');
const mongooseURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const startdb=()=>{
    mongoose.connect(mongooseURI)
    console.log("Database is connsdected succesfully")
}
module.exports = startdb;