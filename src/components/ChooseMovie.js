import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

export default function ChooseMovie () {
    const [items, setItems] = React.useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setItems(response.data)
        })
    }, [])
    console.log(items)

    return (
        <Container>
            <Header>
               <h1>CINEFLIX</h1> 
            </Header>
            <h1>Selecione o filme</h1>
            <Main>
                {items.map((item)=>
                    <Link key={item.id} to={`/sessoes/${item.id}`}>
                        <img src={item.posterURL} />
                    </Link>
                )}
            
            </Main>
            
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
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 20px;
    img {
    width: 129px;
    height: 193px;
    margin-bottom: 20px;
    }
    h1 {
        font-size: 34px;
        height: 67px;
        color: #E8833A;
    }
`; 

