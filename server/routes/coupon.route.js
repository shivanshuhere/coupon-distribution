import { Router } from "express";
import { claimCoupon } from "../controllers/coupon.controller";
const router = Router();

router.route("/claim").post(claimCoupon);

export default router;
