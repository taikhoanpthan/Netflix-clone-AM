import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Navbar from "./../../components/Nav/Navbar";
import Footer from "../../components/footer/Footer";
import Cardtitle from "../../components/Card/Cardtitle";
import "./Home.css";
import Banner from "../../components/Ban/ban";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGMyNjY0NTFlNjNmMjMyYjUyYjIyNTZkNzllNjY5OCIsIm5iZiI6MTc1MTM0MzU3Ny45OTEwMDAyLCJzdWIiOiI2ODYzNjFkOTk3ZGQyZDIwZThlNjQ4OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xmyctSrp2L_8wa696FFgPyuHUTfGzdaO4oGUY6UbbEw",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <Navbar />
      {/* <Banner /> */}
      <div className="hero">
        {movies.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            slidesPerView={1}
            className="swiper-banner"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div
                  className="banner-img"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="hero-caption">
                    <h1>{movie.title}</h1>
                    <div className="movie-info">
                      <span>IMDb: {movie.vote_average.toFixed(1)}</span>
                      <span>4K</span>
                      <span>{movie.release_date.split("-")[0]}</span>
                      <span>2h 05m</span>
                    </div>
                    <p>{movie.overview}</p>
                    <div className="hero-btns">
                      <button
                        className="btn"
                        onClick={() =>
                          window.open(`/player/${movie.id}`, "_blank")
                        }
                      >
                        Play
                      </button>
                      <button className="btn dark-btn">More Info</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* More Cards Section */}
      <div className="more-cards">
        <Cardtitle title={"Top Rated"} category={"top_rated"} />
        <Cardtitle title={"Up Coming"} category={"upcoming"} poster={true} />
        <Cardtitle title={"Now Playing"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
