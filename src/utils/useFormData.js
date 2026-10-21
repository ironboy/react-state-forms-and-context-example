import { useState } from 'react';

export default function useFormData(formValues) {
  const [formData, setFormData] = useState(formValues);

  function formChange(event) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  return {
    formData,
    setFormData,
    // a function you call in each input element like
    // <input {...formAttr('firstName')}/>
    formAttr(name, required = true) {
      return {
        name,
        value: formData[name],
        onChange: formChange,
        required
      };
    }
  };
}
