import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login({ onLogin }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`http://localhost:3001/users?email=${form.email}&senha=${form.password}`);
            const data = await res.json();  
            if (data.length > 0) {
                localStorage.setItem("user", JSON.stringify(data[0]));
                setSuccess(true);
                setError("");
                setTimeout(() => {
                    navigate('/home');
                }, 1500);
            } else {
                setError("Email ou senha inválidos.");
                setSuccess(false);
            }
        }
        catch (error) {
            setError("Erro ao conectar com o servidor.");
            setSuccess(false);
        };
    };

    return (
        <div className={styles.containerStyle}>
            <div className={styles.cardStyle} role="main" aria-label="Formulário de login">
                <h2 style={{ margin: 0, marginBottom: 8 }}>Entrar</h2>
                <p style={{ margin: 0, marginBottom: 16, color: "#6b7280", fontSize: 14 }}>
                    Acesse sua conta
                </p>

                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="email" style={{ fontSize: 13 }}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        className={styles.inputStyle}
                        placeholder="seu@exemplo.com"
                        aria-required="true"
                    />

                    <label htmlFor="password" style={{ fontSize: 13 }}>
                        Senha
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        className={styles.inputStyle}
                        placeholder="••••••••"
                        aria-required="true"
                    />

                    {error && (
                        <div
                            role="alert"
                            style={{ color: "#b00020", marginBottom: 12, fontSize: 13 }}
                        >
                            {error}
                        </div>
                    )}

                    {success && (
                        <div
                            role="status"
                            style={{ color: "#155724", background: "#d4edda", padding: 8, borderRadius: 6, marginBottom: 12, fontSize: 13 }}
                        >
                            Login realizado com sucesso.
                        </div>
                    )}

                    <button type="submit" className={styles.buttonStyle} aria-label="Entrar">
                        Entrar
                    </button>
                </form>

                <div className={styles.smallStyle}>
                    Não tem conta? <button type="button" className={styles.buttonStyle2} onClick={() => navigate('/cadastro')}>Cadastre-se</button>
                </div>
            </div>
        </div>
    );
}
