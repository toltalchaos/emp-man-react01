import React, {useState}  from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
 
 
import firebaseApp from '../../../../../firebase/firebaseConfig';

import Button from 'components/buttons/button';
import FormInput from 'components/forms/forminput';
import { UserAdd } from './../../../../icon';


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
 
  const[name ,setName] = useState('');
  const [department, setDepartment] = useState('');
  
  console.log(name, department)

  function handleInsert(){
    //insert the data from state
    //create uuid check if it already exists. 
    //pass to firebase function - offloaded to firebase cloud for processing 
    const id = uuidv4().substr(0,8);
    //collec refrence to employees
   const newDocRef = firebaseApp.firestore().collection(firebaseApp.auth().currentUser.uid).doc('hr').collection('employees').doc(id);
    newDocRef.set(
      {
        id,
        name,
        department
      }
    )
      //clear input fields
      setName('');
      setDepartment('');
  }

    return ( 
       <WidgetStyles>
          <header>
            <UserAdd/>
              <h2>
               Add New Employee
              </h2>
          </header>
        <FormInput type="text" label="fullname" onChange={(e) => setName(e.target.value)}/>
        <FormInput type="text" label="department" onChange={(e) => setDepartment(e.target.value)}/>
        <Button label="add employee" onClick={handleInsert}/>
       </WidgetStyles>
     );
}
 
export default AddEmployeeWidget;