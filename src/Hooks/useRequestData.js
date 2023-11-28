import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";


export default function useRequestData(path){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}${path}`)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
  }, [path]);
  return [data, isLoading]
}