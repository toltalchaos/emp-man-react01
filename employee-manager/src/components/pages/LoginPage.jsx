import React from "react";

import styled from "styled-components";

import FormInput from "./../forms/forminput";
import Button from "./../buttons/button";
import firebaseApp from './../../firebase/firebaseConfig'

const LoginPageStyles = styled.div`
  max-width: 480px;

  margin: 6rem auto 0;

  header {
    text-align: center;

    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;

    font-weight: 600;
  }

  .jimo {
    background: grey;
  }

  button {
    margin-top: 2rem;
  }
`;

const LoginPage = (props) => {

    //component logic

    //{...props} on the base component to use functions 
    const handleLogin = (e) => {
        firebaseApp.auth().signInWithEmailAndPassword('test@test.test', '1234567')
        .then((userCreds) => {
            console.log(userCreds)
            var user = userCreds.user;
            //redirect to dashboard
        })


    }



  return (
    <LoginPageStyles>
      <header>
        <h1>Account Login</h1>

        <p>access your employee manager</p>
      </header>

      <FormInput inputType="email" label="valid email address" />

      <FormInput inputType="password" label="password (8 charachters)" />

      <Button onClick={handleLogin} label="login to your account" uiStyle="signup" />
    </LoginPageStyles>
  );
};

export default LoginPage;
