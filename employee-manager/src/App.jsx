 import React from 'react';
 
 import PageNotFound from './components/pages/404'
 import HomePage from './components/pages/HomePage'
 import LoginPage from './components/pages/LoginPage'
 import RegisterPage from './components/pages/RegisterPage'
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 import AppBar from './components/appbar/appBar'



function App() {
  return (
    
    <Router>
       <AppBar></AppBar>
       <Switch>
         <Route exact path="/">
            <HomePage></HomePage>
         </Route>

         <Route path="/login">
            <LoginPage></LoginPage>
         </Route>

         <Route path="/register">
            <RegisterPage></RegisterPage>
         </Route>

         <Route path="*">
            <PageNotFound/>
         </Route>

       </Switch>
     </Router>
    
  );
}

export default App;
