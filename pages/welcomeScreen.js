import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";


function welcomeScreen() {

    

    return (
        <Container>
            <Head>
                <title>Welcome to Cocktails</title>
            </Head>

            <LogoContainer>
                <Link href="/home">
                    <img 
                    src="/img/cocktail_logo.png"
                    width={500} 
                    height={500} 
                    style={{marginBottom: 10}}
                    />
                </Link>
                <Link href="/home">
                    <h1>Welcome to Cocktails</h1>
                </Link>
            </LogoContainer>
        </Container>
    );
}

export default welcomeScreen;


const Container = styled.div`
    place-items: center;
    height: 100vh;
`;

const LogoContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        font-size: 50px;
        color: white;
    }
    
`;
