import React, { useState, useEffect } from "react";
import "./ban.css";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Hiển thị sau 1 giây
    return () => clearTimeout(timer); // Xóa timer khi component unmount
  }, []);

  if (!isVisible) return null;

  return (
    <div className="banner-overlay">
      <div className="banner-content">
        <button className="close-btn" onClick={() => setIsVisible(false)}>
          ✖
        </button>
        <h2>Quảng Cáo</h2>
        <p>Địt con mẹ mày Đạt, tlz ấm dâu</p>
      </div>
    </div>
  );
};

export default Banner;
