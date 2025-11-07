import React from "react";
import { useLocation } from "react-router-dom";

export default function Result() {
    const location = useLocation();
    const imc = location.state?.imc;

    return (
        <div>
            <h2>Seu IMC é: {imc ? imc : "Valor não encontrado"}</h2>
        </div>
    );
}