import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Header";
import Footer from "./Footer";
import style from './InputForm.module.css';

export default function Form() {
    const [altura, setAltura] = React.useState("");
    const [peso, setPeso] = React.useState("");
    const [imc, setImc] = React.useState(null);
    const [alertColor, setAlertColor] = React.useState("");
    const [faixa, setFaixa] = React.useState("");
    const navigate = useNavigate();

    function calcularIMC() {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);
        if (alturaNum > 0 && pesoNum > 0) {
            const novoimc = pesoNum / (alturaNum * alturaNum);
            setImc(novoimc)
            if (novoimc < 18.5) {
                setFaixa("abaixo");
                setAlertColor("danger");
            } else if (novoimc < 25) {
                setFaixa("normal");
                setAlertColor("primary");
            } else if (novoimc < 30) {
                setFaixa("sobrepreso")
                setAlertColor("info");
            } else if (novoimc < 35) {
                setFaixa("obesidade 1")
                setAlertColor("warning");
            } else if (novoimc < 40) {
                setFaixa("obesidade 2");
                setAlertColor("danger");
            } else {
                setFaixa("obesidade 3");
                setAlertColor("danger");
            }
        } else {
            setImc(null);
        }
    }

    function limparCampos() {
        setAltura("");
        setPeso("");
        setImc(null);
    }

    return (
        <>
            <Header />
            <div className={style.form_container}>
                <div>
                    <p>Altura (m)</p>
                    <input type="number" placeholder="Ex: 1.75" value={altura} onChange={e => setAltura(e.target.value)} className={style.input_text}/>
                    <br />
                </div>
                <div>
                    <p>Peso (kg)</p>
                    <input type="number" placeholder="Ex: 70" value={peso} onChange={e => setPeso(e.target.value)} className={style.input_text}/>
                    <br />
                </div>
                <div>
                    <button onClick={calcularIMC} className="btn btn-primary">Calcular IMC</button>
                    <button onClick={limparCampos} className="btn btn-warning ms-2">Limpar campos</button>
                </div>
                <h4 className="mt-4">Seu IMC é: {imc !== null ? imc.toFixed(2) : ""}</h4>
                {imc ? (
                    <h4 className={`alert alert-${alertColor}`}>Você está {faixa}</h4>
                ) : null}
                
            </div>
            <Footer />
        </>
    );
}