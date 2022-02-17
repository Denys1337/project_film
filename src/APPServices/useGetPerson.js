import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetPerson = (person_id) => {

    const [persons, setPersons] = useState([])
    console.warn(persons);

    useEffect(() => {
        fetchPerson(person_id)
    },[]);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchPerson(person_id) {
     axios.get(`/person/${person_id}?api_key=${API_KEY}`).then((result) => {
         setPersons(result.data);
         
     })
    }
    
      
  
    return persons
};

export default useGetPerson;

