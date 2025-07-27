import FoodModel from "../models/foodMode.js";
import fs from "fs";

// add food item 

const addFood = async (req, res) => {
    try {     
    const {name,description,price,image,category} = req.body
    let image_filename = `${req.file.filename}`
    const newFood = await FoodModel.create({
        name: name,
        description,
        price,
        image:image_filename,
        category,
    })
            
    return res.status(201).json({success:true,message: "Food added successfully",});


    } catch (error) {
        return res.status(400).json({success:false,message:error})        
    }
}

// get food item 
const getFood = async (req,res) =>{
    try {
        const foodList = await FoodModel.find({})
        return res.json({success:true,food:foodList})
        console.log(foodList);
    } catch (error) {
        return res.json({success:false,message:"ERROR!! item not fetch"})
    }
}

// remove food item 
const removeFood = async (req,res) => {
    try {
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await FoodModel.findByIdAndDelete(req.body.id)
        return res.json({status:true,message:"food item deleted"})
    } catch (error) {
        return res.json({status:false,message:"ERROR, food item is not deleted"})
    }
}

export { addFood,getFood,removeFood };


