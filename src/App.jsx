import './App.css'

import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Poster from './components/RowPosters/Poster';

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Poster/>
    </div>
  );
};

export default App;
