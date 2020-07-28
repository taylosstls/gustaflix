import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GustaflixLogo from '../../assets/img/gustaflix.png';

import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <div className="ContainerHeader">
        <Link className="BtnLogo" to="/">
          <img className="Logo" src={GustaflixLogo} alt="Gustaflix" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
