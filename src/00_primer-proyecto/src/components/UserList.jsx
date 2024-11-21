// import { useEffect, useState } from "react";

import { useFetchData } from "../hooks/useFetchData";

export const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);
  // console.log(data);
  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : endPoint == "users" ? (
          data.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          data.map((item) => <li key={item.id}>{item.body}</li>)
        )}
      </ul>
    </>
  );
};

// export const UserList = ({ endPoint }) => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/${endPoint}`
//       );
//       const data = await response.json();
//       setData(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [endPoint]);

//   return (
//     <ul>
//       {endPoint == "users"
//         ? data.map((item) => <li key={item.id}>{item.name}</li>)
//         : data.map((item) => <li key={item.id}>{item.body}</li>)}
//     </ul>
//   );
// };
