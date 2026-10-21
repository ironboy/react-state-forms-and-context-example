import { useState } from 'react';

export default function ContactForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  return <>
    <form>
      <input name="firstName" placeholder="Förnamn" type="text" value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)} required />
      <input name="lastName" placeholder="Efternamn" type="text" value={lastName} required
        onChange={e => setLastName(e.currentTarget.value)}
      />
      <input name="email" placeholder="E-mail" type="email" required value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
      <label>
        Din fråga:
        <textarea name="question" required value={question}
          onChange={e => setQuestion(e.currentTarget.value)} />
      </label>
    </form>
  </>;
}