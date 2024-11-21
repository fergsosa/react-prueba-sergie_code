import { useState } from "react";
import { UserList } from "./components/UserList";

export const UsersApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };

  return (
    <>
      <h1>Lista de usuarios:</h1>
      <button onClick={handleFetch}>Aquí se llama a la API</button>
      <UserList endPoint={endPoint}></UserList>
    </>
  );
};
