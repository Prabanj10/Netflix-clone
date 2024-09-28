import './poster.css';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import { imageUrl } from '../../constants/constants';

const apikey = import.meta.env.VITE_API_KEY;

const Poster = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/discover/movie?api_key=${apikey}&with_genres=28`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div>
      <h2 className="category">New Release</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="poster"
            src={`${imageUrl + movie.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Poster;
