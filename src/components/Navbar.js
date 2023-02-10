import React from 'react';
import { bool, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoDetailFalse } from '../redux/crypto/crypto';
import '../css/Navbar.css';

export default function Navbar(props) {
  const {
    name,
    displayDetail,
  } = props;
  let year = '2023';
  if (displayDetail) {
    year = '';
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cryptos);
  const crypto = state.filter((crypto) => crypto.displayDetail === true);
  const backArrowClickHandler = () => {
    if (crypto.length) {
      const { id } = crypto[0];
      dispatch(cryptoDetailFalse({ id }));
      navigate('/');
    }
  };

  return (
    <nav className="flex">
      <div className="arrow flex">
        <div onClick={() => { backArrowClickHandler(); }} role="presentation" className="backArrow" />
        <h2>{year}</h2>
      </div>
      <h1>
        Crypto&ensp;
        {name}
      </h1>
      <div className="icons flex">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="mic" />
        <img src="https://cdn-icons-png.flaticon.com/512/3019/3019014.png" alt="settings" />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: string,
  displayDetail: bool,
};

Navbar.defaultProps = {
  name: 'Currency',
  displayDetail: false,
};
