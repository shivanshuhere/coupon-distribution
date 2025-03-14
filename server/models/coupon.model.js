import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    code: String,
    claimed: Boolean,
  },
  {
    timestamps: true,
  }
);

export default Coupon = model("Coupon", couponSchema);
