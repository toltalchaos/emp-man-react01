import AuthContext, { AuthProvider } from 'auth/AuthContext';
import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';
import DeletePanel from './panels/DeletePanel';
import CreatePanel from './panels/CreatePanel';
import EditPanel from './panels/EditPanel';
import ViewAll from './panels/ViewAll';

 


const DashBoardStyles = styled.header ` 
      display:flex;
`

const SideBar = styled.aside `
position:relative;
z-index:10;  
width: 256px;
box-shadow: 0 0 5px 0 grey;
height: calc(100vh - 64px);
padding: 2rem;
header{
    margin-bottom:1rem;
    font-size: 13px;
}
h1{
    font-size: 1.25rem;
    font-weight:bold;

}
li{
    opacity:0.7;
    font-size: 12px;
    margin-bottom: 0.35rem;
}
`

const Panels = styled.aside `  
flex:1;
background:#f3f3f3;
height: calc(100vh - 64px);
`
const DashBoard = (props) => {
   const auth = useContext(AuthContext);
   const {path, url} = useRouteMatch();
   

  if(auth.authenticated){
    return (
            <DashBoardStyles>              
                 <SideBar>
                <header>
                    <h1>Firebase</h1>
                    <p>user: {auth.uid}</p>
                </header>
           
            <ul>
            <li><Link to={`${url}`}>View all</Link>
            </li>
            <li>
              <Link to={`${url}/create`}>add new </Link>
            </li>
            <li>
              <Link to={`${url}/edit`}>edit </Link>
            </li>
            <li>
              <Link to={`${url}/delete`}>delete </Link>
              </li>
              
                </ul>
            </SideBar>
            <Panels>
                <Switch>
                    <Route path={path}>
                        <ViewAll></ViewAll>
                    </Route>
                    <Route path={`${path}/delete`}>
                        <DeletePanel></DeletePanel>
                    </Route>
                    <Route path={`${path}/create`}>
                        <CreatePanel></CreatePanel>
                    </Route>
                    <Route path={`${path}/edit`}>
                        <EditPanel/>
                    </Route>
                </Switch>
            </Panels>   
    
        </DashBoardStyles>
     ) 
  }
  else{
    return<Redirect to='/login'/>
  
       
    }
        
}
 
export default DashBoard;