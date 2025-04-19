import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://dasarisurendra:5128480M@cluster0.1kpvttn.mongodb.net/food-del').then(()=>{
        console.log("DB connected")
    })
}