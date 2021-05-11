import React from 'react'
import styled from "styled-components";



const CocktailItem = ({ item }) => {
    return (
      <Card>
        
        <CardInner>
  
          <CardFront>
            <img src={item.strDrinkThumb} alt='' />
          </CardFront>
  
          <CardBack>
            <h1>{item.strDrink}</h1>
  
            <ul>
  
              <li>
                <strong>Category :</strong> {item.strCategory}
              </li>
              <li>
                <strong>Alcoholic :</strong> {item.strAlcoholic}
              </li>
  
            </ul>
            
          </CardBack>
  
        </CardInner>
  
      </Card>
    )
  }

export default CocktailItem

const Card = styled.section`
  cursor: pointer;
  background-color: transparent;
  height: 300px;
  perspective: 300px;
  

  > h1 {
    font-size: 25px;
    border-bottom: 1px #fff solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }


  > li {
    list-style: none;
    padding-bottom: 10px;
  }


  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: #333;
  color: white;
  padding: 20px;
  transform: rotateY(180deg);
`;

