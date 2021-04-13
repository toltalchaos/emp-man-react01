import React, { useState, useContext } from "react";
import styled from "styled-components";
import ButtonObj from "components/buttons/button";
import firebaseApp from "firebase/firebaseConfig";
import AuthContext from "../../auth/AuthContext";
import { Link, Redirect, Route } from "react-router-dom";

const AppBarStyle = styled.nav`
  margin: 2rem auto;

  a {
    text-decoration: none;
    background-color: cornflowerblue;
    padding: 1rem;
    margin: 1.5rem;
    border-radius: 0.5rem;
    color: white;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

function AppBar(props) {
  const auth = useContext(AuthContext);

  const handleLogOut = () => {
    firebaseApp.auth().signOut();

    auth.authenticate = false;}

    
      return (
        <AppBarStyle>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Dashboard">dashboard</Link>
            </li>
            <li>
              <ButtonObj onClick={handleLogOut}>Sign out</ButtonObj>
            </li>
          </ul>
        </AppBarStyle>
      );
    
  };


export default AppBar;
