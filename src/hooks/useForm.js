import { useState } from 'react';

function useForm(formDataInitial) {
  const [formValues, setFormValues] = useState(formDataInitial);

  function setValue(key, value) {
    setFormValues({
      ...formValues,
      [key]: value, // name: value
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setFormValues(formDataInitial);
  }

  return {
    formValues, handleChange, clearForm,
  };
}

export default useForm;
