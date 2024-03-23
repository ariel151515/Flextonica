import React, {useState} from "react";

const ContextoUser = React.createContext();

const PorveedorContextoUser = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState(undefined);
   
    return (
      <ContextoUser.Provider value={{isAuthenticated}}>
        {children}
      </ContextoUser.Provider>
    )
}

export {ContextoUser, PorveedorContextoUser};