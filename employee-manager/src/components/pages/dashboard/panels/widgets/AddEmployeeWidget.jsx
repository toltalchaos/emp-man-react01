import React  from 'react';
import styled from 'styled-components'
 
 

import Button from 'components/buttons/Button';
import FormInput from 'components/forms/FormInput';
import { UserAdd } from 'components/icons';


const WidgetStyles = styled.aside `  
    background:#ffffff;
    box-shadow:0 0 3px 0px #c5c5c5;
    border-radius: 8px;
    padding: 2rem;
    header{
      display:flex;
      align-items:center;
      margin-bottom:1rem;
    }
    svg{
      width:1.5rem;
      margin-right: 0.25rem;
    }
`


const AddEmployeeWidget = (props) => {
 
  
  
    return ( 
       <WidgetStyles>
          <header>
            <UserAdd/>
              <h2>
               Add New Employee
              </h2>
          </header>
        <FormInput type="text" label="fullname" />
        <FormInput type="text" label="department"/>
        <Button label="add employee"/>
       </WidgetStyles>
     );
}
 
export default AddEmployeeWidget;