import { Router } from "express";
import { claimCoupon } from "../controllers/coupon.controller.js";
const router = Router();

router.route("/claim").post(claimCoupon);

export default router;
