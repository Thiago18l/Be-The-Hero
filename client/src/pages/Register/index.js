import React from 'react';
import './style.css';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

export default function Register(){

    return (
       <div className="register-container">
           <div className="content">
               <section>
                    <img src={Logo} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                            <FiArrowLeft size={24} color="#E02041"/>
                            Já sou cadastrado.
                        </Link>
               </section>
                <form action="">
                    <input placeholder="nome da ONG"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="Whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
           </div>
       </div>
    )
}