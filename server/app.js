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
    credentials: true,
    origin: 'https://coupon-distributor.netlify.app',
    // origin: '*',
    // origin : "http://127.0.0.1:5173",
  methods: 'GET,POST,PUT,DELETE',
  })
);

app.use(cookieParser());

//routes
import couponRoutes from "./routes/coupon.route.js";
app.use("/api/coupon", couponRoutes);

//test
app.get("/", (req, res)=>{
  res.send("<h1>Home page</h1>")
})

export default app;
