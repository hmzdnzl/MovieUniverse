import React,{useState, useEffect} from 'react';
import axiosInstance from '../api/axiosInstance';
import axios from 'axios';

export default function Top100() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance.get('/movie/popular')
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching top 100 movies:", error);
      });
  }, []);

  return (
    <section>
        <div><h1>Top 100 Movies</h1></div>
        <div>
           
        </div>
      
    </section>
  );
}
