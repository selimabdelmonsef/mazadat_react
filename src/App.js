import './App.css';
import 'rsuite/dist/rsuite.min.css';
import Banner from './components/banner/banner.js'
import SearchResult from './components/searchResult/searchResult';

function App() {
  return (
    <div className="App">
      <Banner />
      <SearchResult/>
    </div>
  );
}

export default App;
