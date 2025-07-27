import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type : String, require: true },
    items : { type: Array,},
    amount: { type: Number, require: true },
    status: { type: String, default: 'Food Processing' }, 
    date: { type: Date, default: Date.now()},
    address:{type: Object, require:true},
    payment : {type: Boolean,default:false},
    typeofPayment:{type:String,require:true}
})

const orderModel = mongoose.model("order",orderSchema)

export default orderModel;