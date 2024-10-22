import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://kichenking:Aliganj811301@cluster0.1sakwcu.mongodb.net/food-del').then(()=>console.log("DB connected"));
}
