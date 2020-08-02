import React, { useState, useEffect } from 'react';
import TemplateBase from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import {
  Container, Title, ContainerTop, LinkStyled,
} from './styles';

const CadastroCategoria = () => {
  const formDataInitial = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { formValues, handleChange, clearForm } = useForm(formDataInitial);

  const [category, setCategory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategory([...category, formValues]);
    clearForm();
  };

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/category'
      : 'https://gustaflix.herokuapp.com/category';
    fetch(URL_TOP)
      .then(async (getCategories) => {
        const response = await getCategories.json();
        setTimeout(() => {
          setCategory([
            ...response,
          ]);
        }, 1000);
      });
  }, []);

  return (
    <TemplateBase>
      <Container>
        <ContainerTop>
          <Title>
            Cadastro de Categoria:
          </Title>

          <LinkStyled to="/cadastro/video">
            Cadastrar Vídeo
          </LinkStyled>
        </ContainerTop>

        <form onSubmit={handleSubmit}>

          <FormField
            type="text"
            label="Nome da categoria"
            name="title"
            onChange={handleChange}
            value={formValues.title}
          />

          <FormField
            type="textarea"
            label="Informe a descrição"
            name="description"
            onChange={handleChange}
            value={formValues.description}
          />

          <FormField
            type="color"
            label="Cor"
            name="color"
            onChange={handleChange}
            value={formValues.color}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        {category.length === 0 && (
          <div>
            Carregando...
          </div>
        )}

        <ul>
          {category.map((cat) => (
            <li key={`${cat.id}`}>
              {cat.title}
            </li>
          ))}
        </ul>

      </Container>
    </TemplateBase>
  );
};

export default CadastroCategoria;
