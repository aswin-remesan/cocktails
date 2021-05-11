import styled from "styled-components";
import Header from "../components/ui/Header"
import axios from "axios"
import { useState, useEffect } from "react"
import CocktailGrid from "../components/CocktailGrid"
import Router from 'next/router';
import Search from "../components/ui/Search"


function home() {

    const [ loading, setLoading ] =useState(true)

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoading(true);
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setLoading(false);
  };

    const [items, setItems] = useState([])
    const [query, setQuery] = useState('')


    useEffect( () => {
        const fetchItems = async () => {
          const result = await axios(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
            )
          setItems(result.data.drinks)
          setLoading(false)
                
        }
    
        fetchItems()
        
      }, [query])



    
    return (
        <Container>
                   <Header /> 
                   <Search getQuery={ (q) => setQuery(q)}/>
                   <BodyGrid>
                     <CocktailGrid loading={loading} items={items}/>
                   </BodyGrid>
        </Container>
    )
}

export default home

const Container = styled.div`
    color: white;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

const BodyGrid = styled.div`
    padding: 20;
`;