import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css'

export default function NewIncident(){
    return (
        <div className="new-incident-container">
           <div className="content">
               <section>
                    <img src={Logo} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso!</p>
                    <Link className="back-link" to="/profile">
                            <FiArrowLeft size={24} color="#E02041"/>
                            Voltar para Home
                        </Link>
               </section>
                <form action="">
                    <input placeholder="Titulo do Caso"/>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
           </div>
       </div>
    );
}