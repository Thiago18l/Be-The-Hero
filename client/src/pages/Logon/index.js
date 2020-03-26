import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import HerosImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api';


export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await api.post('sessions', { id });
            //salvando no storage
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            alert(`Bem vindo ${response.data.name }`)
            history.push('/profile');
        }catch (err){
            alert('Falha no Login, tente novamente com um ID válido.')
        }
    }

    return (
        <div>
            <div className="logon-container">
                <section className="form">
                    <img src={Logo} alt="Logo" />
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu Logon</h1>
                        <input placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={24} color="#E02041"/>
                            Não tenho cadastro.
                        </Link>
                    </form>
                </section>
                <img src={HerosImg} alt="Heroes"/>
            </div>
        </div>
    );
}