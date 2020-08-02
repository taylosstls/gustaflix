import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/category';

import {
  Container, Title, ContainerTop, LinkStyled,
} from './styles';

const CadastroVideo = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);

  const { handleChange, formValues } = useForm({
    title: '',
    url: '',
    category: '',
    videoDescription: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      title, url, videoDescription, category,
    } = formValues;

    videosRepository.createVideos({
      title,
      url,
      videoDescription,
      category,
      categoryId: 6,
    })
      .then(() => {
        history.push('/');
      });
  };

  useEffect(() => {
    categoriesRepository
      .getAllCategories()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <TemplateBase>
      <Container>
        <ContainerTop>
          <Title>
            Cadastro de Vídeo
          </Title>

          <LinkStyled to="/cadastro/categoria">
            Cadastrar Categoria
          </LinkStyled>
        </ContainerTop>

        <form onSubmit={handleSubmit}>

          <FormField
            type="text"
            label="Título do vídeo"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />

          <FormField
            type="url"
            label="URL do vídeo"
            name="url"
            value={formValues.url}
            onChange={handleChange}
          />

          <FormField
            type="text"
            label="Categoria do vídeo"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <FormField
            type="textarea"
            label="Descrição do vídeo"
            name="videoDescription"
            value={formValues.videoDescription}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

      </Container>
    </TemplateBase>
  );
};

export default CadastroVideo;
