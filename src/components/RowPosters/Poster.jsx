import './poster.css';
import axios from '../../axios';
import { useEffect, useState } from 'react';
import { imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';

const apikey = import.meta.env.VITE_API_KEY;

const Poster = (props) => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    axios.get(props.link).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  const handleChange = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`
      )
      .then((res) => {
        if (res.data.results.length !== 0) {
          setYoutubeId(res.data.results[0].key);
        } else {
          console.log('No videos Avilable');
        }
      });
  };

  return (
    <div>
      <h2 className="category">{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={props.isLarge ? 'poster' : 'smallPoster'}
            src={`${imageUrl + movie.backdrop_path}`}
            alt=""
            onClick={() => {
              handleChange(movie.id);
              setYoutubeId('');
            }}
          />
        ))}
      </div>
      {youtubeId && (
        <div>
          <YouTube
            videoId={youtubeId}
            opts={opts}
          />
        </div>
      )}
    </div>
  );
};

export default Poster;
