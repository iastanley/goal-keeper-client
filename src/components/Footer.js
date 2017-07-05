import React from 'react';
import './Footer.css';

export default function Footer(props) {
  let photoCredit, homeFooterClass;
  if (window.location.pathname === '/') {
    photoCredit = (<p>Photo by Bruno Nascimento on Unsplash</p>);
    homeFooterClass = '';
  } else {
    photoCredit = null;
    homeFooterClass = 'home-footer-class';
  }

  return (
    <footer className={homeFooterClass}>
      <p>&copy; 2017 Illana Stanley</p>
      {photoCredit}
    </footer>
  );
}
