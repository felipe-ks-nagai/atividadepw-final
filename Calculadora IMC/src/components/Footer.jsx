import style from './Footer.module.css';

export default function Footer() {
    return (
        <div className={style.container}>
            <div>
                <h5>O IMC é calculado utilizando a fórmula Peso(kg)/Altura(m)²</h5>
                <hr />
                <h6>Os números utlizados pela OMS como <b>Referência</b> são o seguinte</h6 >
                <p>Abaixo de 18,5 → Baixo peso<br />18,5 a 24,9 → Peso normal<br />25 a 29,9 → Sobrepeso<br />30 a 34,9 → Obesidade grau I<br />35 a 39,9 → Obesidade grau II<br />40 ou mais → Obesidade grau III (ou obesidade mórbida)</p>
            </div>
        </div>
    );
}