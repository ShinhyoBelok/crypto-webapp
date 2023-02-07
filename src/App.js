import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptoDetail" element={<CryptoPage />} />
      </Routes>
    </div>
  );
}

export default App;
