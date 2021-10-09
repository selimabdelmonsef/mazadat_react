import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Banner from './components/banner/banner.js'
import SearchResult from './components/searchResult/searchResult';
import { MyAccesories } from './accesories/accesories';

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchResult/>
      <MyAccesories/>
    </div>
  );
}

export default App;
