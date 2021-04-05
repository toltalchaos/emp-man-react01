
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const  AppBarStyle = styled.nav `
margin:2rem auto;

 a{
     text-decoration:none;
    background-color:cornflowerblue;
    padding:1rem;
    margin:1.5rem;
    border-radius:0.5rem;
    color:white;
}

ul{
    display: flex;
    align-items:center;
    justify-content:space-evenly;
}
`

function  AppBar (props){

return (
 < AppBarStyle>
 <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/login">Login</Link></li>
     <li><Link to="/register">Register</Link></li>
 </ul>   
 </ AppBarStyle>
 )

}

export default  AppBar 
 
