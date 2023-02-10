import { string } from 'prop-types';
import React from 'react';
import '../css/Hero.css';

export default function Hero(props) {
  const {
    name,
    rank,
  } = props;

  return (
    <section className="hero flex">
      <img src="https://cdn-icons-png.flaticon.com/512/3461/3461335.png" alt="Trading Graph" />
      <div>
        <h2>{name}</h2>
        <h5>
          TOP&ensp;
          {rank}
        </h5>
      </div>
    </section>
  );
}

Hero.propTypes = {
  name: string,
  rank: string,
};

Hero.defaultProps = {
  name: 'CRYPTOS',
  rank: '100',
};
