import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState(""); // State để lưu tên người dùng
  const navigate = useNavigate();
  const auth = getAuth();

  // Lấy thông tin người dùng sau khi đăng nhập/đăng ký
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || "Children"); // Hiển thị tên hoặc mặc định là "Children"
    }
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  };

  // Xử lý cuộn để làm mờ navbar
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search" className="icon" />
        <p>{userName}</p> {/* Hiển thị tên người dùng */}
        <img src={bell} alt="Bell" className="icon" />
        <div className="navbar-profile">
          <img src={profile} alt="Profile" className="profile" />
          <img src={caret} alt="Caret" className="caret" />
          <div className="dropdown">
            <p onClick={handleSignOut}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
