import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

// middleware
dotenv.config({
  path: "./.env",
});
app.use(bodyParser.json());
app.use(
  cors({
    // origin: "http://localhost:5174",
    origin:"https://coupon-distributor.netlify.app",
    credentials: true,
  })
);
app.use(cookieParser());

//routes
import couponRoutes from "./routes/coupon.route.js";
app.use("/api/coupon", couponRoutes);

export default app;
