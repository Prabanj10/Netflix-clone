import { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { imageUrl } from '../../constants/constants';

const apikey = import.meta.env.VITE_API_KEY;

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${apikey}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[3]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ' '})`,
      }}>
      <div className="content">
        <h1 className="title">{movie ? movie.name : ''}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ''}</h1>
      </div>

      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
