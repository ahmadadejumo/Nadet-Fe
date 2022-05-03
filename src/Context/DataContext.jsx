import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [lectureName, setLectureName] = useState("");
  const [sectionName, setSectionName] = useState("");

  return (
    <DataContext.Provider
      value={{ lectureName, setLectureName, sectionName, setSectionName }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
