import React from 'react'
import styled from "styled-components"



const Header = () => {
    return (
        <Container>
            <img 
                src="/img/cocktail_logo.png"
                width={100} 
                height={100} 
            />
            <p> &nbsp; Cocktails </p>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 125px;

    position: sticky;
    border-bottom: 1px solid whitesmoke;
    top: 0;
    z-index: 100;

    > p {
        font-size: 60px;
        color: white;
    }
`;
