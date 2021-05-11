import React from 'react'
import CocktailItem from './CocktailItem'
import Loading from './Loading'
import styled from "styled-components";

const CocktailGrid = ({ items, loading }) => {
      return loading ? (
        <Loading />
      ) : (
        <Cards>
          {items.map((item) => (
            <CocktailItem key={item.idDrink} item={item}></CocktailItem>
          ))}
        </Cards>
      )
    }
    
export default CocktailGrid



const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 20px;

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
`;