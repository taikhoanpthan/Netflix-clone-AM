import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-banner">
        <p>🇻🇳 Hoàng Sa &amp; Trường Sa là của Việt Nam! 🇻🇳</p>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
          <p>Phim hay cả rổ</p>
        </div>
        <ul className="footer-nav">
          <li>Hỏi-Đáp</li>
          <li>Chính sách bảo mật</li>
          <li>Điều khoản sử dụng</li>
          <li>Giới thiệu</li>
          <li>Liên hệ</li>
        </ul>
        <div className="footer-social">
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter" />
          <i className="fab fa-tiktok" />
          <i className="fab fa-youtube" />
          <i className="fab fa-instagram" />
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>Dongphim</li>
          <li>Ghienphim</li>
          <li>Motphim</li>
          <li>Subnhanh</li>
        </ul>
        <p>
          RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao miễn
          phí! Vietsud, thuyết minh, lòng tiếng full HD. Khám phá nền tảng phim
          trực tuyến hay nhất 2024 chất lượng 4K!
        </p>
        <p>© 2024 RoPhim</p>
      </div>
    </footer>
  );
};

export default footer;
