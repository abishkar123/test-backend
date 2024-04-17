import express from 'express'
import { createNewIngredients } from '../model/ingredient/ingredientModel.js';
const router = express.Router()

router.post("/ingredient", async (req, res, next)=>{
    try{
        const{name} = req.body;
 
        const result = await createNewIngredients(req.body)
        
       
        if (result?._id) {
            return  res.json({
                status: "success",
                message: " Successfully register the ingredients",
              })
        }
        res.json({
            status:"error",
            message:"cannot create ingredientrouter"
        })
    }catch(error){
        next(error)
    }
})

export default router;