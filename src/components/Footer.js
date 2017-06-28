import React from 'react';
import './Footer.css';

export default function Footer(props) {
  const photoCredit = window.location.pathname === '/' ? (<p>Photo by Bruno Nascimento on Unsplash</p>) : null;

  return (
    <footer>
      <p>&copy; 2017 Illana Stanley</p>
      {photoCredit}
    </footer>
  );
}
