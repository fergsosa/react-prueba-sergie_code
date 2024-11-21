/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const initialState = {
  data: null,
  isLoading: true,
  errors: null,
};

export const UseFetch = (url) => {
  const [state, setState] = useState(initialState);

  const { data, isLoading, errors } = state;

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        errors: err,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFetch();
  }, [url]);

  return {
    data,
    isLoading,
    errors,
  };
};
