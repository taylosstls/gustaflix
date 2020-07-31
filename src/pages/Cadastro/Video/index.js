import React from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/Template';

const CadastroVideo = () => (
  <TemplateBase>
    <h1>Página de Cadastro de Vídeo</h1>

    <Link to="/cadastro/categoria">
      Cadastrar Categoria
    </Link>
  </TemplateBase>
);

export default CadastroVideo;
