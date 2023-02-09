import React from 'react';
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cryptoShowDetail } from '../redux/crypto/crypto';
import '../css/CurrencyCard.css';

let count = 0;
export default function CurrencyCard(props) {
  const {
    id, name, rank, priceUsd,
  } = props;
  const price = parseFloat(priceUsd, 10).toFixed(5);
  let bgColor;
  if (count === 0) {
    bgColor = 'bgOne';
    count += 1;
  } else if (count === 1) {
    bgColor = 'bgTwo';
    count += 1;
  } else if (count === 2) {
    bgColor = 'bgTwo';
    count += 1;
  } else if (count === 3) {
    bgColor = 'bgOne';
    count = 0;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cryptoDetail = (event) => {
    const cryptoId = event.currentTarget.id;
    dispatch(cryptoShowDetail({ id: cryptoId }));
    navigate(`/${cryptoId}`);
  };
  return (
    <article role="presentation" onClick={(event) => { cryptoDetail(event); }} className={`currencyCard flex ${bgColor}`} id={id}>
      <div className="top flex">
        <h2 className="rank">
          Rank&ensp;
          {rank}
        </h2>
        <img src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png" alt="flecha" />
      </div>
      <div className="bt flex">
        <h2>{name}</h2>
        <h3>{`USD ${price}`}</h3>
      </div>
    </article>
  );
}

CurrencyCard.propTypes = {
  name: string.isRequired,
  rank: string.isRequired,
  id: string.isRequired,
  priceUsd: string.isRequired,
};
