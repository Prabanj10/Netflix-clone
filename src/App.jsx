import './App.css';

import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Poster from './components/RowPosters/Poster';
import { action, comedy, horror, orginals, romance, trending } from './urls';

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Poster
        title="Netflix Orginals"
        link={orginals}
        isLarge
      />
      <Poster
        title="Trending"
        link={trending}
      />
      <Poster
        title="Action"
        link={action}
      />
      <Poster
        title="Comedy"
        link={comedy}
      />
      <Poster
        title="Horror"
        link={horror}
      />
      <Poster
        title="Romance"
        link={romance}
      />
    </div>
  );
};

export default App;
