import React from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="arrow flex">
        <div className="backArrow" />
        <h2>2023</h2>
      </div>
      <h1>Crypto Currency</h1>
      <div className="icons flex">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="mic" />
        <img src="https://cdn-icons-png.flaticon.com/512/3019/3019014.png" alt="settings" />
      </div>
    </nav>
  );
}
