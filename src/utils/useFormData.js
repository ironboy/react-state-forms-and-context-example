import { useState } from 'react';

export default function useFormData(formValues) {

  const initialFormValues = { ...formValues };
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
    },
    // send the form
    submitForm(url, callback = () => { }, method = 'POST') {
      return async event => {
        // prevent page reload
        event.preventDefault();
        // send form data and relay the result to the callback
        // function, provided by the consumer of submitForm
        callback(await (await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })).json());
        // TODO: Add error handling if the backend doesn't respond etc
      };
    },
    resetForm() {
      setFormData({ ...initialFormValues });
    }
  };
}
