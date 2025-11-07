import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Home({ onStart, onAbout }) {
    const container = {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f6f9fc",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        padding: "24px",
        boxSizing: "border-box",
    };

    const card = {
        width: "100%",
        maxWidth: 480,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 6px 18px rgba(16,24,40,0.08)",
        padding: "32px",
        textAlign: "center",
    };

    const title = { margin: 0, fontSize: 28, color: "#0f172a" };
    const subtitle = { marginTop: 8, marginBottom: 20, color: "#475569" };
    const actions = { display: "flex", gap: 12, justifyContent: "center", marginTop: 16 };
    const primary = {
        appearance: "none",
        border: "none",
        background: "#2563eb",
        color: "#fff",
        padding: "10px 18px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 15,
    };
    const secondary = {
        appearance: "none",
        border: "1px solid #e2e8f0",
        background: "#fff",
        color: "#0f172a",
        padding: "10px 18px",
        borderRadius: 8,
        cursor: "pointer",
        fontSize: 15,
    };

    const navigate = useNavigate();


    return (
        <>
            <Header />
            <div style={container}>
                <main style={card} role="main" aria-labelledby="home-title">
                    <h1 id="home-title" style={title}>Calculadora IMC</h1>
                    <p style={subtitle}>
                        Calcule seu índice de massa corporal (IMC) de forma simples e rápida.
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                    <div style={{ textAlign: "left" }}>
                        <strong>Como funciona?</strong>
                        <ul style={{ paddingLeft: 18, marginTop: 8, color: "#475569" }}>
                            <li>Peso em kg</li>
                            <li>Altura em metros</li>
                            <li>Receba o resultado e interpretação</li>
                        </ul>
                    </div>
                </div>

                <div style={actions}>
                    <button
                        type="button"
                        style={primary}
                        onClick={() => navigate('/calculadora') }
                        aria-label="Iniciar calculadora"
                    >
                        Iniciar
                    </button>
                </div>
            </main>
            </div>
        </>
    );
}