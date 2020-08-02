import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

import { Container, Title } from './styles';

const CadastroVideo = () => {
  const history = useHistory();
  const { handleChange, formValues } = useForm({
    title: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=q6_6Nh4Js2Q',
    category: 'Games',
    videoDescription: `Ten hours of calm Resident Evil 7 save room music.
    ····················································································
    Game: Resident Evil 7: Biohazard`,
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

  return (
    <TemplateBase>
      <Container>
        <Title>
          Página de Cadastro de Vídeo:
        </Title>

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

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </Container>
    </TemplateBase>
  );
};

export default CadastroVideo;
