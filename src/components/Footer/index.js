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
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        
         
      </p>
        Desenvolvido por 
        {' '}
        <a href="https://twitter.com/sabridadd">
        Sabrina Dourado Dias
        </a>
    </FooterBase>
  );
}

export default Footer;
