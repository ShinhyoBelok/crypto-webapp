import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyCard from '../components/CurrencyCard';
import { getCrypto } from '../redux/crypto/crypto';

export default function HomePage() {
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.cryptos);
  useEffect(() => {
    if (!cryptoList.length) {
      dispatch(getCrypto());
    }
  }, [dispatch, cryptoList.length]);

  return (
    <main>
      {
        cryptoList.map((coin) => (
          <CurrencyCard
            key={coin.id}
            id={coin.id}
            name={coin.name}
            rank={coin.rank}
            priceUsd={coin.priceUsd}
          />
        ))
      }
    </main>
  );
}
