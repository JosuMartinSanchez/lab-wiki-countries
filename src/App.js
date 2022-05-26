import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="countries"></div>

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/:countriesDetail" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
