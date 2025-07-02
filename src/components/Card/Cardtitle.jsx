import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./ct.css";
import { Link } from "react-router-dom";

const Cardtitle = ({ title, category, poster }) => {
  const [apiData, setApiData] = useState([]);

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
      `https://api.themoviedb.org/3/movie/${
        category || "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div className="cardtitle">
      <h2>{title || "Popular on Myfix"}</h2>
      {apiData.length > 0 && (
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper-container"
        >
          {apiData.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={`/player/${card.id}`}>
                <div className={`card ${poster ? "poster" : ""}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      poster ? card.poster_path : card.backdrop_path
                    }`}
                    alt={card.original_title}
                  />
                  <p>{card.original_title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Cardtitle;
