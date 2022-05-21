import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Forms(props) {
    const [nome, setNome] = useState("")
    const [CPF, setCPF] = useState("")
    
    function finalizar (event) {
        event.preventDefault();
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: [1, 2, 3],
            name: nome,
            cpf: CPF
        })
        console.log({
            ids: props.array,
            name: nome,
            cpf: CPF
        })
        promise.then(() => alert("feu bpoom"))
        promise.catch(()=> alert("feu ruim"))

    }

    return (
        <Form onSubmit={finalizar}>
            <h1>
            Nome do comprador:
            </h1>
            <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="Digite seu nome..." required />
            <h1>
            CPF do comprador:
            </h1>
            <input value={CPF} onChange={e => setCPF(e.target.value)} type="text" placeholder="Digite seu CPF..." required />

           
                <button>
                    <h1>Reservar assento(s)</h1>
                </button>
            
        </Form>
    )
}
const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:start;
    margin: 0 auto;
    margin-bottom: 120px;
    margin-top:35px ;
    margin-left: 10px;
    margin-right:20px;
    h1 {
    justify-content: flex-start;
    margin-bottom: 5px;
    }
    input {
    height: 51px;
    width: 100%;
    margin-bottom: 10px;
    }
    button {
        margin: 22px auto;
        background-color: #E8833A;
        border-radius: 3px;
        border: #E8833A;
        width: 225px;
        height: 43px;
        h1 {
            font-size: 18px;
            height: 43px;
            width: 225px;
            margin: 0 10px;
            color: #FFFFFF;
        }   
    }
`;