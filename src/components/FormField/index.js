import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, placeholder, onChange,
}) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        :
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default FormField;
