import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiXSquare } from "react-icons/fi";
import API from "../../services/api";

//css
import "./style.css";
import api from "../../services/api";


export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    API.get("profile", {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  async function handleDeleteIncident(id){
    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id));
      alert('Caso deletado com sucesso!');
    }catch(err){
      alert('Erro ao deletar caso, tente novamente');
    }
  }
  const LogOut = () => {
    localStorage.clear()

    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <img src={Logo} alt="Be the hero" />
        <span>
          Bem vindo, <strong>{ongName}</strong>
        </span>

        <Link className="button" to="incidents/new">
          Cadastrar novo Caso
        </Link>
        <button onClick={LogOut} type="button">
          <FiPower size={20} color="#E02041" />
        </button>
      </header>

      <h1>CASOS CADASTRADOS</h1>
      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong>CASO:</strong>
            <p>{incidents.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incidents.description}</p>

            <strong>VALOR:</strong>
        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'})
        .format(incidents.value)}</p>

            <button className="button-delete" onClick={() => handleDeleteIncident(incidents.id)} type="button" >
              <FiXSquare size={20} color="#E02041" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
