import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ContextoUser = React.createContext();

const PorveedorContextoUser = ({children}) => {
   const [isAuthenticated, setIsAuthenticated] = useState();
   const [user, setUser] = useState(null); // Estado para almacenar la información del usuario

   useEffect(() => {
      const auth = getAuth();
      
      const unsubscribe = onAuthStateChanged(auth, user => {
        setIsAuthenticated(!!user); // !!user devuelve true si hay un usuario autenticado, de lo contrario false
        setUser(user)
      });

      return () => unsubscribe(); // Limpiar el listener cuando el componente se desmonte
  }, [isAuthenticated]); // Agrega isAuthenticated y navigation como dependencias

   
  const getUserData = () => {
     return user;
  };

    return (
      <ContextoUser.Provider value={{isAuthenticated, setIsAuthenticated, getUserData }}>
        {children}
      </ContextoUser.Provider>
    )
}

export {ContextoUser, PorveedorContextoUser};
