import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getCrypto } from '../redux/crypto/crypto';
import SearchBar from '../components/SearchBar';
import CurrencyCard from '../components/CurrencyCard';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../css/homePage.css';

export default function HomePage() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cryptos.length) {
      dispatch(getCrypto());
    }
  }, [dispatch, cryptos.length]);
  return (
    <>
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <section className="searchBarSection">
        <SearchBar />
      </section>
      <section className="currencyCardSection flex">
        {
          cryptos.map((coin) => (
            <CurrencyCard
              key={uuidv4()}
              id={coin.id}
              name={coin.name}
              rank={coin.rank}
              priceUsd={coin.priceUsd}
            />
          ))
        }
      </section>
    </>
  );
}
