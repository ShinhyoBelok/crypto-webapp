import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../css/CryptoPage.css';

export default function CryptoPage() {
  const state = useSelector((state) => state.cryptos);
  const crypto = state.filter((crypto) => crypto.displayDetail === true);
  const {
    name,
    symbol,
    marketCapUsd,
    changePercent24Hr,
    maxSupply,
    volumeUsd24Hr,
    vwap24Hr,
    priceUsd,
    displayDetail,
    rank,
  } = crypto[0];
  return (
    <section className="cryptoDetailSection">
      <header className="App-header">
        <Navbar
          displayDetail={displayDetail}
          name={name}
        />
        <Hero
          displayDetail={displayDetail}
          name={name}
          rank={rank}
        />
        <h4>Crypto Breakdown</h4>
      </header>
      <ul>
        <li className="bgOne">
          <p>Name</p>
          <div>
            {name}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgTwo">
          <p>Symbol</p>
          <div>
            {symbol}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgOne">
          <p>Price Usd</p>
          <div>
            {parseFloat(priceUsd).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgTwo">
          <p>Market Cap Usd</p>
          <div>
            {parseFloat(marketCapUsd).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgOne">
          <p>Change Percent 24Hr</p>
          <div>
            {parseFloat(changePercent24Hr).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgTwo">
          <p>Max Supply</p>
          <div>
            {parseFloat(maxSupply).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgOne">
          <p>Volume Usd 24Hr</p>
          <div>
            {parseFloat(volumeUsd24Hr).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
        <li className="bgTwo">
          <p>Vwap 24Hr</p>
          <div>
            {parseFloat(vwap24Hr).toFixed(5)}
            <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
          </div>
        </li>
      </ul>
    </section>
  );
}
