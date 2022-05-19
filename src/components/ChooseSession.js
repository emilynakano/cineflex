import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ChooseSession() {
    const { idFilme } = useParams()

    const [items, setItems] = useState({})
    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then((response)=> {
            setItems(response.data)
        })
    }, [])

    return (
        <Container>
            <Header>
               <h1>CINEFLIX</h1> 
            </Header>
            <h1>Selecione o horário</h1>
            <Main>
                {items.days.map((day)=> 
                <>
                <h1>{day.weekday} - {day.date}</h1>
                <Buttons>
                    {day.showtimes.map((time)=>
                    <button>
                        <h1>{time.name}</h1>
                    </button>)}
                    
                </Buttons>
                </>)}
                
            </Main>

            <Footer>
                <div className="rectangle">
                    <img src={items.posterURL}/>
                </div>
                <h1>{items.title}</h1>
            </Footer>

        </Container>
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
const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    margin-bottom: 120px;
    h1{
    height: 60px;
    font-size: 20px;
    justify-content: start;
    height: 80px;
    }
`;
const Buttons = styled.div`div
    display: flex;
    flex-direction: row;
    button {
        background-color: #E8833A;
        border-radius: 3px;
        border: #E8833A;
        width: 83px;
        height: 43px;
        margin-bottom: 22px;
        margin-right: 5px;
        h1 {
            height: 43px;
            width: 83px;
            margin: 0 10px;
            color: #FFFFFF;
        }   
    }
`;
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