import Coupon from "../models/coupon.model.js";

const ipClaims = {};
const cookieClaims = {};

const claimCoupon = async (req, res) => {
  try {
    
    const ip = req.ip;
    const cookie = req.cookies?.couponClaim;
    const currentTime = Date.now();
  
    // Check IP and cookie restrictions
    if (ipClaims[ip] && currentTime - ipClaims[ip] < 3600000) {
      return res
        .status(200)
        .json({ message: `You can claim another coupon in ${Math.ceil((3600000 - (currentTime - ipClaims[ip]))/60000)} minutes.` });
    }
    if (cookieClaims[cookie] && currentTime - cookieClaims[cookie] < 3600000) {
      return res
        .status(200)
        .json({ message: `You can claim another coupon in ${Math.ceil((3600000 - (currentTime - cookieClaims[cookie]))/60000)} minutes.` });
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
  
    return res.json({ message: "Coupon claimed successfully!", coupon: coupon.code });
  
  } catch (error) {
    return res.status(500).json({error})
  }};

const getCoupons = async (req, res) => {
   try {
     const coupons = await Coupon.find({claimed : "false"});
     if(coupons == []) return res.status(400).json({message : "no coupons found.", coupons: null});
     return res.status(200).json({message:"Coupons found", coupons})
   } catch (error) {
    return res.status(500).json({error})
    
   }
}

export { claimCoupon ,getCoupons };
