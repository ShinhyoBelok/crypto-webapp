import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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
    <>
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
      </header>
      <ul>
        <li>
          Name:&ensp;
          {name}
        </li>
        <li>
          Symbol:&ensp;
          {symbol}
        </li>
        <li>
          Price Usd:&ensp;
          {parseFloat(priceUsd).toFixed(5)}
        </li>
        <li>
          Market Cap Usd:&ensp;
          {parseFloat(marketCapUsd).toFixed(5)}
        </li>
        <li>
          Change Percent 24Hr:&ensp;
          {parseFloat(changePercent24Hr).toFixed(5)}
        </li>
        <li>
          Max Supply:&ensp;
          {parseFloat(maxSupply).toFixed(5)}
        </li>
        <li>
          Volume Usd 24Hr:&ensp;
          {parseFloat(volumeUsd24Hr).toFixed(5)}
        </li>
        <li>
          Vwap 24Hr:&ensp;
          {parseFloat(vwap24Hr).toFixed(5)}
        </li>
      </ul>
    </>
  );
}
