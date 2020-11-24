import React, { useState, useContext } from 'react';

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (dataUser) => {
    setUser(dataUser);
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}