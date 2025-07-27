import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"

import foodRouter from "./routes/foodRouter.js"
import userRouter from "./routes/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js"
import orderRouter from "./routes/orderRouter.js"



// app config 
const app = express()
const port =process.env.PORT || 5000

// middleware
app.use(express.json())
app.use(cors())

// db connection 


app.get("/", (req, res) => {
  res.send("hello! Dev ")
})

// api endpoints for user router
// app.use("/api/user",userRouter)

// api endpoints for foods
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))

// api endpoints for users
app.use("/api/user",userRouter)

// api endpoint for cart
app.use("/api/cart",cartRouter)

// api endpoint for order
app.use("/api/order", orderRouter)

app.listen(port, () => {
  console.log("server is running........");
  console.log(`http://localhost:${port}`);
  connectDB()

})