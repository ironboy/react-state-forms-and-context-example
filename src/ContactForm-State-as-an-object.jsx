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

  return <>
    <form>
      <input name="firstName" placeholder="Förnamn" type="text" required value={formData.firstName}
        onChange={formChange} />
      <input name="lastName" placeholder="Efternamn" type="text" required value={formData.lastName}
        onChange={formChange}
      />
      <input name="email" placeholder="E-mail" type="email" required value={formData.email}
        onChange={formChange}
      />
      <label>
        Din fråga:
        <textarea name="question" required value={formData.question}
          onChange={formChange}
        />
      </label>
    </form>
  </>;
}