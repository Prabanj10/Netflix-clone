import { useEffect, useState } from 'react';
import './NavBar.css';
import axios from '../../axios';
import { imageUrl } from '../../constants/constants';

const apikey = import.meta.env.VITE_API_KEY;

const NavBar = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    input &&
      axios
        .get(`/search/movie?query=${input}&api_key=${apikey}`)
        .then((res) => {
          console.log(res.data.results);
          setResult(res.data.results);
        });
  }, [input]);

  const handleSearch = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        alt=""
      />
      <img
        className="avatar"
        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp"
        alt=""
      />
      <div className="searchBox">
        <input
          placeholder="Search"
          type="text"
          className="searchBar"
          value={input}
          onChange={handleSearch}
        />
        {input && (
          <div className="searchResult">
            {result.length ? (
              result.slice(0, 5).map((item) => (
                <div
                  className="resultBox"
                  key={item.id}>
                  <img
                    className="resultImage"
                    src={imageUrl + item.poster_path}
                    alt=""
                  />

                  <p className="resultTitle">{item.title}</p>
                </div>
              ))
            ) : (
              <p>No result</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
