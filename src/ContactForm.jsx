import useFormData from './utils/useFormData';

export default function ContactForm() {

  const { formData, formAttr } = useFormData({
    firstName: '',
    lastName: '',
    email: '',
    question: ''
  });

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