import React from 'react';
import TemplateBase from '../../../components/Template';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {
  return (
    <TemplateBase>
      <h1>Página de Cadastro de Categoria</h1>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>
    </TemplateBase>
  )
}

export default CadastroCategoria;
