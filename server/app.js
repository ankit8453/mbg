import express from "express";
import PaymentRoutes from "./routes/paymentRoutes.js";
import cors from 'cors';

import { config } from 'dotenv';

config({ path: "./config/config.env"});

export const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", PaymentRoutes);

app.get("/api/getkey", (req,res) =>
     res.status(200).json({ key: process.env.RAZORPAY_API_KEY})
);