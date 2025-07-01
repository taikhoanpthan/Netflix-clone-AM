import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [dataApi, setDataApi] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setDataApi(res.results[0] || {}))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <Link to={"/"}>
        <img src={back_arrow} alt="Back" />
      </Link>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${dataApi.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{dataApi.published_at}</p>
        <p>{dataApi.name}</p>
        <p>{dataApi.type}</p>
      </div>
    </div>
  );
};

export default Player;
