import { Routes, Route } from 'react-router-dom';
import CryptoPage from './pages/CryptoPage';
import HomePage from './pages/HomePage';
import './css/basic.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cryptoId" element={<CryptoPage />} />
      </Routes>
    </div>
  );
}

export default App;
