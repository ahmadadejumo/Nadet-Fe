import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [lectureName, setLectureName] = useState("");

  return (
    <DataContext.Provider value={{ lectureName, setLectureName }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
