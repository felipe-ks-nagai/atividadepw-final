import React, {useEffect} from 'react';
import style from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {

    const isActive = (href) => {
        try {
            return window.location.pathname === href;
        } catch {
            return false;
        }
    };

        const navigate = useNavigate();

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                navigate('/');
            }
        }, []);
    

    return (
        <header className={style.containerStyle}>
            <nav className={style.navStyle} aria-label="Main navigation">
                <button 
                    className={`${style.linkBase} ${isActive('/') ? style.linkActive : ''}`}
                    onClick={() => navigate('/home')}
                    aria-current={isActive('/home') ? 'page' : undefined}
                >
                    Home
                </button>

                <button
                    className={`${style.linkBase} ${isActive('/calculadora') ? style.linkActive : ''}`}
                    onClick={() => navigate('/calculadora')}
                    aria-current={isActive('/calculadora') ? 'page' : undefined}
                >
                    Calculadora
                </button>

                <button
                    className={`${style.linkBase} ${isActive('/404') ? style.linkActive : ''}`}
                    onClick={() => navigate('/404')}
                    aria-current={isActive('/404') ? 'page' : undefined}
                >
                    404 page
                </button>

                <button
                    className={`${style.linkBase} ${isActive('/listusers') ? style.linkActive : ''}`}
                    onClick={() => navigate('/listusers')}
                    aria-current={isActive('/listusers') ? 'page' : undefined}
                >
                    Lista de users
                </button>
            </nav>
            <nav className={style.navProfile}> 
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                        {JSON.parse(localStorage.getItem("user"))?.nome}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <li>{JSON.parse(localStorage.getItem("user"))?.id}</li>
                    <li>{JSON.parse(localStorage.getItem("user"))?.nome.split(" ")[0]}</li>
                    <li>{JSON.parse(localStorage.getItem("user"))?.email}</li>
                    <li>
                        <button className="dropdown-item" onClick={() => {
                            localStorage.removeItem("user");
                            navigate('/');
                            }}
                            style={{borderColor: "#C4C1C0", border: "1px", marginTop: "10px"}}>
                            Sair
                        </button>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    );
}
