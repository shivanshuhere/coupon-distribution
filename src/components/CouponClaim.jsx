import { useState } from "react";
import axios from "axios";

const CouponClaim = () => {
  const [message, setMessage] = useState("");

  const claimCoupon = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URI}/claim-coupon`,
        {},
        { withCredentials: true }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <button onClick={claimCoupon}>Claim Coupon</button>
      <p>{message}</p>
    </div>
  );
};

export default CouponClaim;
