/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/FetchData";

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data, isLoading } = await fetchData(endPoint);
    setData(data);
    setIsLoading(isLoading);
  };

  useEffect(() => {
    getData();
  }, [endPoint]);

  return {
    data,
    isLoading,
  };
};
