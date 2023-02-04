import { FormImput, FormStyle } from "./style";
import { useState } from "react";

function FormContact() {
  let database = [];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleContact = (event) => {
    event.preventDefault();
    database.push(name, email, subject);

    console.log(database);
  };
  return (
    <FormStyle className="formContact" onSubmit={handleContact}>
      <FormImput
        type="text"
        placeholder="Nome Completo"
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <FormImput
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <FormImput
        type="text"
        placeholder="Assunto"
        required
        className="Subject"
        value={subject}
        onChange={(event) => {
          setSubject(event.target.value);
        }}
      />
      <button typeof="submit">Enviar</button>
    </FormStyle>
  );
}
export default FormContact;
