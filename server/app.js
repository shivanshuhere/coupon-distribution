import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

// middleware
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//routes
import couponRoutes from "./routes/coupon.route";
app.use("/api/coupon", couponRoutes);

export default app;
