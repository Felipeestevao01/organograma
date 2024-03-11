import React, { useState } from "react";
import "./Form.css"; // Importando um arquivo CSS para estilizar o formulário

function Formulario() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para lidar com os dados do formulário, como enviar para um servidor
    console.log("Nome:", nome);
    console.log("Cargo:", cargo);
    console.log("Imagem:", imagem);
    console.log("Time:", time);
    // Limpa os campos após o envio do formulário
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <div className="form-container">
      <h2>Preencha os dados</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nome">Nome</label>
          <input
            placeholder="Digite seu nome"
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cargo">Cargo</label>
          <input
            placeholder="Digite seu cargo"
            type="text"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="imagem">Imagem</label>
          <input
            placeholder="Informe o endereço da imagem"
            type="text"
            id="imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit">Criar card</button>
      </form>
    </div>
  );
}

export default Formulario;
