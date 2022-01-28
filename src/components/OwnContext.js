import react, { createContext, useState } from "react";

export const OwnContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "parvej sikder",
      position: "Full Stack Developer",
      salary: 35000,
    },
    {
      id: 2,
      name: "Nur azom",
      position: "Full Stack Developer",
      salary: 35000,
    },
    {
      id: 3,
      name: "Fuad Ferdous",
      position: "deputy commissioner",
      salary: 35000,
    },
    {
      id: 4,
      name: "Suman Faruk",
      position: "Banker",
      salary: 35000,
    },
  ]);
  return (
    <div>
      <OwnContext.Provider value={[users, setUsers]}>
        {props.children}
      </OwnContext.Provider>
    </div>
  );
};
