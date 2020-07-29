import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />

      <p>
        Desenvolvido durante a <strong>#ImersãoReact</strong> da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
