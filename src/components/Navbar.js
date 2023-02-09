import { bool, string } from 'prop-types';
import React from 'react';
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
  return (
    <nav className="flex">
      <div className="arrow flex">
        <div className="backArrow" />
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
