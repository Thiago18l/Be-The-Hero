import React from 'react';
import './styles.css';
import HerosImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'


export default function logon(){
    return (
        <div>
            <div className="logon-container">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <form>
                        <h1>Faça seu Logon</h1>
                        <input placeholder="Seu ID"/>
                        <button className="button" type="submit">Entrar</button>
                        <a href="/register">
                            <FiLogIn size={16} color="#E02041"/>
                            Não tenho cadastro.
                        </a>
                    </form>
                </section>
                <img src={HerosImg} alt="Heroes"/>
            </div>
        </div>
    );
}