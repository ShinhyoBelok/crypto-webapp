import React from 'react';
import { string } from 'prop-types';

export default function CurrencyCard(props) {
  const {
    id, name, rank, priceUsd,
  } = props;
  return (
    <article id={id}>
      <div>
        <h2>
          Rank
          {rank}
        </h2>
        <img alt="flecha" />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{priceUsd}</h3>
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
