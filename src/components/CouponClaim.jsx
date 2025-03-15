import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/coupon.style.css";

const CouponClaim = () => {
  const [message, setMessage] = useState("");
  const [coupons, setCoupons] = useState(null);

  const claimCoupon = async () => {
    try {
      const response = await axios.post(
        "https://coupon-distribution-za7h.onrender.com/api/coupon/claim",
        // "http://localhost:8080/api/coupon/claim",
        {},
        { withCredentials: true }
      );
      setMessage(response?.data?.message);
    } catch (error) {
      setMessage(error?.response?.data?.message || "An error occurred while claiming the coupon.");
    }
  };

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(
          "https://coupon-distribution-za7h.onrender.com/api/coupon/get",
          // "http://localhost:8080/api/coupon/get",
        );
        if (response) {
          setCoupons(response?.data?.coupons);
        }
      } catch (error) {
        setMessage(error?.response?.data?.message || "An error occurred while fetching the coupons.");
      }
    };

    fetchCoupons();
  }, [message]);

  return (
    <div>
      {coupons && coupons.length > 0 ? (

        <div className="coupon-codes">
          <h2>Coupon Codes</h2>
          {coupons.map((item, index) => (

            <button className="cta" onClick={claimCoupon} key={index}>
              <span>Get Coupon {item?.code}</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>

          ))}
        </div>
      ) : (
        <h2>No Coupons are available at the time... please come back later.</h2>
      )}
      <p>{message}</p>
    </div>
  );
};

export default CouponClaim;
