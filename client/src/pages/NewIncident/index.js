import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  
    const handleNewIncident = async (e) => {
        e.preventDefault();
        const data ={
            title,
            description,
            value,
        }
        try{
             await api.post('incidents', data, {
                 headers: {
                     Authorization: ongId,
                 }
             });

            alert('Caso cadastrado com sucesso!');
            history.push('/profile');
        }catch(err){
            alert('Caso não cadastrado, tente novamente.');
        }
        
    }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={Logo} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso!
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={24} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form action="">
          <input
            placeholder="Titulo do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button onClick={handleNewIncident} className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
