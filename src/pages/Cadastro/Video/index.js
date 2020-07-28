import React from 'react';
import TemplateBase from '../../../components/Template';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
  return (
    <TemplateBase>
      <h1>Página de Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </TemplateBase>
  )
}

export default CadastroVideo;
