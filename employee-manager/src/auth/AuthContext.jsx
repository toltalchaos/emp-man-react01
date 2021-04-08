import React from 'react';

const AuthContext = React.createContext(null); //initial value = set null





const AuthProvider = (props) => {
    //const [user, setUser] = ({role:"admin", uid:null, authenticate:false})

    return ( 

        <AuthContext.Provider value={{role:"", uid:null, authenticate:false}}>
           {props.children}
        </AuthContext.Provider>

     );
}
 
export {AuthProvider};


export default AuthContext;


