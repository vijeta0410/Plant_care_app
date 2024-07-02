import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName : "PLANT_CARE_APP"
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log(`Error occured while connecting to MongoDB : ${err}`)
    });
}