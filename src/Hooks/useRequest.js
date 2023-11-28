import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export function useGetFilms(){
    const [filmsList, setFilmsList] = useState([]);


    useEffect(() => {
      axios
        .get(`${BASE_URL}/films`)
        .then((response) => {
          setFilmsList(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);
    return filmsList
}

export function useGetCharacter(){
    const [caractersList, setCaractersList] = useState([]);
 

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people`)
      .then((response) => {
        setCaractersList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return caractersList
}

export function useGetStarShips(){
    const [starShipsList, setStarShipsList] = useState([]);


    useEffect(() => {
      axios
        .get(`${BASE_URL}/starships`)
        .then((response) => {
          setStarShipsList(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);
    return starShipsList
}