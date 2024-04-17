import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    
    ingredient: { type: String, required: true },
    
},

    {
        timestamps: true,
    }


);
export default mongoose.model("test1", ingredientSchema );