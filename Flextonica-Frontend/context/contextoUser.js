import React, {useState} from "react";

const ContextoUser = React.createContext();

const PorveedorContextoUser = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState(true);
   
    return (
      <ContextoUser.Provider value={{isAuthenticated, setIsAuthenticated}}>
        {children}
      </ContextoUser.Provider>
    )
}

export {ContextoUser, PorveedorContextoUser};