import React from 'react';

function FormField({ label, type, name, value, placeholder, onChange }) {
  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;
