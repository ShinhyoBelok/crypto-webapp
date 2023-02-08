import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCrypto } from '../redux/crypto/crypto';
import SearchBar from '../components/SearchBar';
import CurrencyCard from '../components/CurrencyCard';
import '../css/homePage.css';

export default function HomePage() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);
  return (
    <main>
      <section className="searchBarSection">
        <SearchBar />
      </section>
      <section className="currencyCardSection flex">
        {
          cryptos.map((coin) => (
            <CurrencyCard
              key={coin.id}
              id={coin.id}
              name={coin.name}
              rank={coin.rank}
              priceUsd={coin.priceUsd}
            />
          ))
        }
      </section>
    </main>
  );
}
