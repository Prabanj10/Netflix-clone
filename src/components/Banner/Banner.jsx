import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry standard dummy text ever since the 1500s
        </h1>
      </div>

      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
