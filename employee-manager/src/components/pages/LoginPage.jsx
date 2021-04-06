import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

import styled from "styled-components";

import FormInput from "./../forms/forminput";
import Button from "./../buttons/button";
import firebaseApp from "./../../firebase/firebaseConfig";

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
  //use state hooks - functional approach to build component
  //usestate to call setEmail to change Email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setisValid] = useState(false);

  //component logic

  //{...props} on the base component to use functions
  //'test@test.test', '1234567'
  const handleLogin = (e) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCreds) => {
        console.log(userCreds.user.uid);
        var userid = userCreds.user.uid;
        //redirect to dashboard
        setisValid(true);
      })
      .catch((error) => {
        console.log(error.message);
        setisValid(false);
      });
  };

  if (isValid) {
    return <Redirect to="/dashboard/Dashboard" />;
  } else {
    return (
      <LoginPageStyles>
        <header>
          <h1>Account Login</h1>

          <p>access your employee manager</p>
        </header>

        <FormInput
          inputType="email"
          label="valid email address"
          onChange={(evnt) => setEmail(evnt.target.value.trim())}
        />

        <FormInput
          inputType="text"
          label="password (8 charachters)"
          onChange={(evnt) => setPassword(evnt.target.value.trim())}
        />

        <Button
          onClick={handleLogin}
          label="login to your account"
          uiStyle="signup"
        />
      </LoginPageStyles>
    );
  }
};

export default LoginPage;
