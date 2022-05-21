import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucesso() {
    const location = useLocation()
    return (
        <Container>
            <Header>
                <h1>CINEFLIX</h1> 
            </Header>
            <div className="text">
                <h2>
                Pedido feito com sucesso!
                </h2>
            </div>
            <Main>
                <h3>
                    Filme e sessão
                </h3>
                <h1>
                    {location.state.title}
                </h1>
                <h1>
                    {location.state.date} 15:00
                </h1>
                <h3>
                    Ingressos
                </h3>
                {location.state.ids.map((id)=>
                <h1>
                    Assento {id}
                </h1>)}
                <h3>
                    Comprador
                </h3>
                <h1>
                    Nome: {location.state.name}
                </h1>
                <h1>
                    CPF: {location.state.CPF}
                </h1>
                <button>
                    <h1>Voltar pra Home</h1>
                </button>
            </Main>
            
        </Container>
    )
}

const Container = styled.div`

.text {
    width:170px;
    margin: 0 auto;
    height: 110px;
    display: flex;
}
    
h1 {
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    color: #293845;
    height: 110px;
    font-size: 24px;
}
h2{
    width:170px;
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color:#247A6B;
    font-size: 24px;

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
const Header = styled.header`
    width: 100%;
    height: 67px;
    left: 0px;
    top: 0px;
    background-color: #C3CFD9;
    h1 {
        font-size: 34px;
        height: 67px;
        color: #E8833A;
    }
`;
const Main = styled.header`
    margin-left: 30px;
    h3 {
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color:#293845;
    font-size: 24px;
    }
    h1 {
    display: flex;
    flex-wrap:wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    color: #293845;
    height: 30px;
    font-size: 22px;
    }
    h3:first-child {
        margin-top:0;
    }
`;