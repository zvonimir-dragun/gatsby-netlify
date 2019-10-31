import React from 'react';
import footerStyles from "./Footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <span className="text-dark">
        © copyright, Sport Droid
        <span> {new Date().getFullYear()}</span>.
      </span>
    </div>
  </footer>
)


export default Footer;