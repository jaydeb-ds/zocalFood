import  { AdminListOrder, placeOrder,updateStatus,userOrder,verifyOrder } from "../controllers/order.controller.js";
import authMiddleware from "../middleware/auth.js";
import express from "express";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware ,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorder",authMiddleware, userOrder);
orderRouter.get("/list",AdminListOrder)
orderRouter.post("/status",updateStatus)

export default orderRouter;