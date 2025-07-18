import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express()

const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors({
    origin: [
        'https://food-delivery-frontend-69x1.onrender.com',
        'https://food-delivery-admin-a827.onrender.com'
    ],
    credentials: true
}));


//db connection
connectDB()

// api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

