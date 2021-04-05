import React from 'react';
import styled from 'styled-components';
import Logo from 'components/icon/Logo';
import {Link} from 'react-router-dom';

//dev server npm run build

const HomePageStyles = styled.header`
text-align: center;
margin:6rem auto;
svg{
    width: 120px;

}
h1{
    font-size: 2.5rem;
}
p{
    color: #4a4aa8;
}


`


const HomePage = (props) => {
    return ( <>
    <HomePageStyles>

        <Logo></Logo>
        <h1>Employee Manager</h1>
        <p>Employee-manager demo using react and firebase hosting</p><br/>

    </HomePageStyles>
      </>);
}
 
export default HomePage;