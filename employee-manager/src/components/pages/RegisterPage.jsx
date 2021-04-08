import styled from "styled-components";
import FormInput from "./../forms/forminput";
import Button from "./../buttons/button";
import { Link, Redirect, Route  } from "react-router-dom";
import React, { useState, useContext } from "react";

import firebaseApp from "./../../firebase/firebaseConfig";

const RegisterPageStyles = styled.div`
  max-width: 480px;
  margin: 6rem auto;
  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const RegisterPage = (prop) => {
  //use state hooks - functional approach to build component
  //usestate to call setEmail to change Email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setisValid] = useState(false);

  //component logic

  //{...props} on the base component to use functions
  //'test@test.test', '1234567'
  const handleRegister = (e) => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
    return <Redirect to="/login" />;
  } else {
    return (
      <RegisterPageStyles>
        <header>
          <h1>UnlimitedTrial account</h1>
          <p>no CC required</p>
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

        <Button label="Create Account" onClick={handleRegister} />
        <Link to="/login">Login</Link>
      </RegisterPageStyles>
    );
  }
};

export default RegisterPage;
