import React from 'react';
import styled from 'styled-components';
import FormInput from './../forms/forminput';
import Button from './../buttons/button'

const RegisterPageStyles = styled.div `
 max-width:480px;
 margin: 6rem auto;
 header{
     text-align:center;
     margin-bottom:2rem;
 }
 
 h1{
     font-size: 2rem;
     font-weight: 600;

 }


`;


const RegisterPage = (prop) => {
    return ( 
   <RegisterPageStyles>
       <header>
           <h1>UnlimitedTrial account</h1>
            <p>no CC required</p>   
        </header>

        <FormInput id="s" label="Email" inputType="Text"/>
        <FormInput id="NameOnAccount" label="NameOnAccount" inputType="Text"/>
        <FormInput id="Password" label="Password" inputType="Text"/>

       <Button label ="Create Account"/>
       <Button label ="login" uiStyle="login"/>

   </RegisterPageStyles>
        );
}
 

export default RegisterPage;