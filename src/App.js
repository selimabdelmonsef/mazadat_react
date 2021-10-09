import './App.css';
import 'rsuite/dist/rsuite.min.css';
import BannerComponent from './components/banner/banner.js'
import SearchResultComponent from './components/searchResult/searchResult';
import AccesoriesComponent from './components/accesoriesComponent/accesoriesComponent';

function App() {

  return (
    <div className="App">
      <BannerComponent />
      <SearchResultComponent/>
      <AccesoriesComponent/>
    </div>
  );
}

export default App;
