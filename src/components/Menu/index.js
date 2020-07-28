import React from 'react';
import './style.css';
import GustaflixLogo from '../../assets/img/gustaflix.png';

import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <div className="ContainerHeader">
        <a className="BtnLogo" href="/">
          <img className="Logo" src={GustaflixLogo} alt="Gustaflix" />
        </a>

        <Button as="a" className="ButtonLink" href="">
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
