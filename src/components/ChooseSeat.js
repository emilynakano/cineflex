import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Forms from './Form';

export default function ChooseSeat () {
    const { idSessao } = useParams()
    const[seats, setseats] = useState(false)
    let array = []

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then((response)=> setseats(response.data))
    }, [])

    let assentos = []
    for(let i = 0; i < 50; i ++) {
        assentos.push(i)
    }
    if(!seats) {
        return "carregando"
    }
    return (
        <Container>
            <Header>
                <h1>CINEFLIX</h1> 
            </Header>
            <h1>Selecione o(s) assento(s)</h1>
            <Choose>
                {seats.seats.map((seat, index)=><Assentos array={array} seat={seat} index={index}/>)}

                    <Option>
                        <Selecionado>
                        </Selecionado>
                        <h2>
                            Selecionado 
                        </h2>
                    </Option>
                    <Option>
                        <Disponivel>
                        </Disponivel>
                        <h2>
                            Disponível 
                        </h2>
                    </Option>
                    <Option>
                        <Indisponivel>
                        </Indisponivel>
                        <h2>
                            Indisponível 
                        </h2>
                    </Option>

            </Choose>
                <Forms array={array} />


            <Footer>
                <div className="rectangle">
                    <img src={seats.movie.posterURL}/>
                </div>
                <div className="text">
                    <h1>{seats.movie.title}</h1>
                    <h1>{seats.day.weekday} - {seats.name}</h1>
                </div>
            </Footer>
        </Container>
    )
    
}
function Assentos(props) { 
    let aleluia = ""
    if(props.seat.isAvailable) {
        aleluia = '#C3CFD9';
    } else {
        aleluia = '#FBE192'
    }
    const [color, setColor] = useState(aleluia)

    function clicar() {
        if(props.seat.isAvailable && color !== '#8DD7CF') {
            setColor('#8DD7CF')
        }
        props.array.push(1)
    }

    return (
        <Seat onClick={clicar} color={color}> {props.index + 1} </Seat>
    )
    
}
const Container = styled.div`
h1 {
    display: flex;
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
const Choose = styled.main`
    margin: 0 auto;
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Seat = styled.div`
    margin-right: 5px;
    margin-bottom: 7px;
    width: 26px;
    height: 26px;
    background-color: ${props =>{ return props.color }};
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Option = styled.div`
    width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        font-size: 20px;
    }
    
`;
const Selecionado = styled.div`
    margin-right: 5px;
    margin-bottom: 7px;
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8DD7CF;
`
const Indisponivel = styled.div`
    
        margin-right: 5px;
        margin-bottom: 7px;
        width: 26px;
        height: 26px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FBE192;
`
const Disponivel = styled.div`
        margin-right: 5px;
        margin-bottom: 7px;
        width: 26px;
        height: 26px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #C3CFD9;

`


const Footer = styled.div`
    background-color: #293845;
    position: fixed;
    z-index: 1;
    bottom: 0;
    
    width: 100%;
    height: 117px;

    background: #DFE6ED;
    border-top: 1px solid #9EADBA;;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    h1 {
    height:117px;
    font-size: 26px;
    }
    img {
    padding: 0 10px;
    height: 70px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 10px 0px;
    margin-left: 0px;
    }
    .rectangle {
    width: 68px;
    height: 90px;
    margin-left: 10px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 10px;
    }
    .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 60px;
}
`;