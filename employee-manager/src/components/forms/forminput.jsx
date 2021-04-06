import React from 'react';  
import styled from 'styled-components';

const FormInputStyles = styled.div `

color:grey;
box-shadow:0 4px -2px rgba(0,0,0,0.12);
input{

width:100%;

font-size: 1rem;

background-color:inherit;

border:none;

padding: 0.25rem;

outline:none;

color: #3a464c;




}
label{
    font-size:13px;
    color:navy;

}

`;




const FormInput = (props) => {
    return ( <>
    
    <FormInputStyles {...props}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.inputType} id={props.id} name={props.name}></input>
    </FormInputStyles>
    
    </> );
}
 
export default FormInput;