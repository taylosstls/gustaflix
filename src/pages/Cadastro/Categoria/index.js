import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const formDataInitial = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [category, setCategory] = useState([]);
  const [formValues, setFormValues] = useState(formDataInitial);

  function handleValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value, // name: value
    });
  }

  function handleChange(event) {
    handleValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategory([...category, formValues]);
    setFormValues(formDataInitial);
  };

  return (
    <TemplateBase>
      <h1>
        Cadastro de Categoria:
        {' '}
        {formValues.name}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          type="text"
          label="Nome da categoria"
          name="name"
          onChange={handleChange}
          value={formValues.name}
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

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {category.map((cat, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${cat}${indice}`}>
            {cat.name}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>

    </TemplateBase>
  );
};

export default CadastroCategoria;
