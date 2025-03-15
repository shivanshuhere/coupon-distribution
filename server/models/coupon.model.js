import mongoose from "mongoose";


const couponSchema = new mongoose.Schema({
  code: String,
  claimed : Boolean,
}, {
      timestamps: true,
    });

const Coupon = mongoose.model('Coupon', couponSchema, 'coupons');
export {Coupon};

