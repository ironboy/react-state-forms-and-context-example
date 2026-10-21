import { useState } from 'react';

export default function ContactForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    question: ''
  });

  function formChange(event) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  function formAttr(name, required = true) {
    return { name, value: formData[name], onChange: formChange, required };
  }

  return <>
    <form>
      <input {...formAttr('firstName')} placeholder="Förnamn" type="text" />
      <input {...formAttr('lastName')} placeholder="Efternamn" type="text" />
      <input {...formAttr('email')} placeholder="E-mail" type="email" />
      <label>
        Din fråga:
        <textarea {...formAttr('question')} />
      </label>
    </form>
  </>;
}