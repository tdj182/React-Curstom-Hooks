import { useState } from "react";
import axios from "axios";

const useAxios = (BASE_URL) => {
  const [res, setRes] = useState([]);

  const addRes = async (path = "") => {
    const response = await axios.get(BASE_URL + path);
    setRes(responses => [...responses, response.data])
  }

  return [res, addRes]
}

export default useAxios