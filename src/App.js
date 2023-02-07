import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptoDetail" element={<CryptoPage />} />
      </Routes>
    </div>
  );
}

export default App;
