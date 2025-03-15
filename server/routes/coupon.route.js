import { Router } from "express";
import { claimCoupon, getCoupons } from "../controllers/coupon.controller.js";
const router = Router();

router.route("/claim").post(claimCoupon);
router.route("/get").get(getCoupons);



export default router;
