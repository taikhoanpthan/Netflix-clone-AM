import React from "react";
import Navbar from "./../../components/Nav/Navbar";
import hero_baner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";
import "./Home.css";
import Cardtitle from "../../components/Card/Cardtitle";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_baner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            ratione, natus ex dicta, hic beatae doloremque voluptatem quidem
            odit voluptatum assumenda tempora, reprehenderit quam molestias nam
            quasi iure architecto accusantium?
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playicon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoicon} alt="" />
              More Info
            </button>
          </div>
          <Cardtitle title={"Popular"}/>
        </div>
      </div>
      <div className="more-cards">
        <Cardtitle title={"Top Rated"} category={"top_rated"} />
        <Cardtitle title={"Up Coming"} category={"upcoming"} />
        <Cardtitle title={"Now Playing"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
