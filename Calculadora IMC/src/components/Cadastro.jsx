import React, { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";
import { useNavigate } from "react-router-dom";


export default function Cadastro() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [mensagem, setMensagem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erro ao carregar usuários:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      nome: form.nome,
      email: form.email,
      senha: form.senha,
    };

    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        const addedUser = await res.json();
        setUsers(prev => [...prev, addedUser]);
        setMensagem({ tipo: "sucesso", texto: "Cadastro realizado com sucesso!" });
        setForm({ nome: "", email: "", senha: "" });
      } else {
        setMensagem({ tipo: "erro", texto: "Erro ao cadastrar usuário." });
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem({ tipo: "erro", texto: "Erro de conexão com o servidor." });
    }
  };

  return (
    <div className={styles.containerStyle}>
      <h2>Cadastro de Usuário</h2>
      {mensagem && <div className={styles.mensagemStyle}>{mensagem.texto}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            className={styles.inputStyle}
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
        </label>

        <label>
          Email
          <input
            className={styles.inputStyle}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@exemplo.com"
            required
          />
        </label>

        <label>
          Senha
          <input
            className={styles.inputStyle}
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
            placeholder="Senha"
            required
          />
        </label>

        <button type="submit" className={styles.buttonStyle}>
          Cadastrar
        </button>
        <br /><br />
        <button
          type="button"
          className={styles.buttonStyle}
          onClick={() => navigate('/')}
        >
          Voltar para o Login
        </button>
      </form>
    </div>
  );
}
