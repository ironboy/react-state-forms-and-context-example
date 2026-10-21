import useFormData from './utils/useFormData';

export default function ContactForm() {

  const {
    formData,
    formAttr,
    submitForm,
    resetForm
  } = useFormData({
    firstName: '',
    lastName: '',
    email: '',
    question: ''
  });

  function doAfterFormSubmit(serverResponse) {
    console.log({ serverResponse });
    alert('Jippi');
    // TODO: Goto another route? Or reset form
    // For now just reset the form
    resetForm();
  }

  return <>
    <form onSubmit={submitForm('/api/webQuestions', doAfterFormSubmit)}>
      <input {...formAttr('firstName')} placeholder="Förnamn" type="text" />
      <input {...formAttr('lastName')} placeholder="Efternamn" type="text" />
      <input {...formAttr('email')} placeholder="E-mail" type="email" />
      <label>
        Din fråga:
        <textarea {...formAttr('question')} />
      </label>
      <button type="submit">Skicka din fråga</button>
    </form>
  </>;
}