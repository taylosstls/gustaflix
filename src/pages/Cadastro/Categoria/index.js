import React, { useState } from 'react';
import TemplateBase from '../../../components/Template';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

const CadastroCategoria = () => {

  const formDataInitial = {
    name: '',
    description: '',
    color: '#000000'
  }

  const [category, setCategory] = useState([]);
  const [formValues, setFormValues] = useState(formDataInitial);

  function handleValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value // name: value
    })
  }

  function handleChange(event) {
    handleValue(
      event.target.getAttribute('name'),
      event.target.value
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategory([...category, formValues]);
    setFormValues(formDataInitial);
  }


  return (
    <TemplateBase>
      <h1>Cadastro de Categoria: {formValues.name}</h1>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>

      <form onSubmit={handleSubmit}>

        <FormField
          type="text"
          label="Nome da Categoria"
          name="name"
          placeholder="Informe a categoria"
          onChange={handleChange}
          value={formValues.name}
        />

        <FormField
          type="color"
          label="Cor"
          name="color"
          onChange={handleChange}
          value={formValues.color}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {category.map((category, index) => {
          return (
            <li key={`${category}-${index}`}>
              {category.name}
            </li>
          )
        })
        }
      </ul>

    </TemplateBase >
  )
}

export default CadastroCategoria;
