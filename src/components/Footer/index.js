import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="./">
        <img className="Logo" src={Logo} alt="Logo Badflix" />
      </a>
      <p>
        Dolorosamente criado durante o tédio.
      </p>
    </FooterBase>
  );
}

export default Footer;
