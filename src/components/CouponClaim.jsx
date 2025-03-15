import { useState } from "react";
import axios from "axios";
import "../styles/coupon.style.css";

const CouponClaim = () => {
  const [message, setMessage] = useState("");

  const claimCoupon = async () => {
    try {
      const response = await axios.post(
        "https://coupon-distribution-za7h.onrender.com/api/coupon/claim",
        {},
        { withCredentials: true }
      );
      setMessage(response?.data?.message);
    } catch (error) {
      setMessage(error?.response?.data?.message);
    }
  };

  return (
    <div>
      {/* <button onClick={claimCoupon}>Claim Coupon</button> */}
<button className="cta" onClick={claimCoupon}>
  <span>Get Coupon</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

      <p>{message}</p>
    </div>
  );
};

export default CouponClaim;
