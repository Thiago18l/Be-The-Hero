import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

//css
import './style.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be the hero"/>
                <span>Bem vindo Usuario</span>

                <Link className="button" to="incidents/new">Cadastrar novo Caso</Link>
                <button type="button">
                    <FiPower size={20} color="#E02041" />
                </button>
            </header>
                
                
            <h1>CASOS CADASTRADOS</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                         <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}