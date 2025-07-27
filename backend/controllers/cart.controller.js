import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async(req,res)=>{ 
    try {
        let userdata = await userModel.findById(req.body.userId)
        let cartData = await userdata.cartData

        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        return res.json({success:true, message:" Item added  to cart"})
    } catch (error) {
        console.log(error);
        return res.json({success:false,meessage:error})
    }
}

// remove item to user cart
const removeToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        return res.json({success:true,message:"Item removed"})
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"error"})
    }
}

// fetch item to user cart 
const getCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        return res.json({success:true,cartData})
    } catch (error) {
       console.log(error);
        return res.json({success:false,message:"error"})
    }
}

export {addToCart, removeToCart, getCart}