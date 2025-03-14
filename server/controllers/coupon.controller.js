import Coupon from "../models/coupon.model";

const ipClaims = {};
const cookieClaims = {};

const claimCoupon = async (req, res) => {
  const ip = req.ip;
  const cookie = req.cookies.couponClaim;
  const currentTime = Date.now();

  // Check IP and cookie restrictions
  if (ipClaims[ip] && currentTime - ipClaims[ip] < 3600000) {
    return res
      .status(400)
      .json({ message: "You can claim another coupon in 1 hour." });
  }

  if (cookieClaims[cookie] && currentTime - cookieClaims[cookie] < 3600000) {
    return res
      .status(400)
      .json({ message: "You can claim another coupon in 1 hour." });
  }

  // Find an unclaimed coupon
  const coupon = await Coupon.findOneAndUpdate(
    { claimed: false },
    { claimed: true }
  );
  if (!coupon) {
    return res.status(400).json({ message: "No coupons available." });
  }

  // Update IP and cookie tracking
  ipClaims[ip] = currentTime;
  res.cookie("couponClaim", currentTime, { maxAge: 3600000 });
  cookieClaims[currentTime] = currentTime;

  res.json({ message: "Coupon claimed successfully!", coupon: coupon.code });
};

export { claimCoupon };
