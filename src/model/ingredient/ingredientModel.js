import ingredientSchema from "./ingredientSchema.js";

export const createNewIngredients = (obj) => {
    return ingredientSchema(obj).save();

}