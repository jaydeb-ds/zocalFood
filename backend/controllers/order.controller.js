import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const frontend_url = "http://localhost:5174";

// place order
const placeOrder = async (req, res) => {
    try {

        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            typeofPayment: req.body.typeofPayment
        });
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} })

        // payment

        if (newOrder.typeofPayment == "COD") {
            return res.json({ success: true, })
        }
        else {
            const line_items = req.body.items.map((item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name
                    },
                    unit_amount: item.price * 1 * 100 // converting to paise
                },
                quantity: item.quantity
            }))

            line_items.push({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: "Delivery Charges"
                    },
                    unit_amount: 40 * 100 // converting to paise
                },
                quantity: 1
            })

            const session = await stripe.checkout.sessions.create({
                line_items: line_items,
                mode: 'payment',
                success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

            })

            return res.json({ success: true, session_url: session.url })
        }
        
    } catch (error) {
        console.error("Error placing order:", error);
        return res.json({ success: false, message: "Internal server error" });
    }
}

const verifyOrder = async (req,res) =>{
        const {orderId,success, payment,typeofPayment} = req.body;
        try {
            if (success == "true") {
                await orderModel.findByIdAndUpdate(orderId,{payment:true})
                return res.json({success:true,message:"paid"})
            }
          
            else{
                await orderModel.findByIdAndDelete(orderId)
                return res.json({success:false,message:"Not paid"})
            }
        
        } catch (error) {
            console.log(error);
           return res.json({success:false,message:"error"}) 
        }
}

//  USER ORDER FOR FRONTEND
const  userOrder = async (req, res) => {
        const {payment,typeofPayment} = req.body;

    try {
        if(payment==false && typeofPayment == "online"){
                await orderModel.findByIdAndDelete(orderId)
                return res.json({success:false,message:"Not paid"})
        }
        const orders =  await orderModel.find({userId:req.body.userId})
        return res.json({success:true,data:orders})
    } catch (error) {
        console.error("Error fetching user orders:", error);
        return res.json({ success: false, message: "Internal server error" })     
    }
}


// display order for adimn panel 

const AdminListOrder = async (req,res) =>{
    try {
        const orders =  await orderModel.find({})
        return res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// api for Updating  order status
const updateStatus = async (req, res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        return res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"ERROR"})
    }
}


export {placeOrder,verifyOrder,userOrder,AdminListOrder,updateStatus}