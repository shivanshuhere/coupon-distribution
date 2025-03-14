import mongoose from "mongoose";

const DB_NAME = "coupon-distribution";
const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
