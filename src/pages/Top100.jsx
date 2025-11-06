import React,{useState, useEffect} from 'react';
import axiosInstance from '../api/axiosInstance';
import axios from 'axios';

export default function Top100() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const requests = [];
        for (let page = 1; page <= 5; page++) {
          requests.push(
            axiosInstance.get('/movie/top_rated', {
              params: {
                language: 'en-US',
                page: page,
              },
            })
          );
        }
        const responses = await Promise.all(requests);
        const allMovies = responses.flatMap(res => res.data.results);
        setMovies(allMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <section>
        <div><h1>Top 100 Movies</h1></div>
        <div className='flex flex-col pl-4 gap-y-3'>
          <h2>Movie Names</h2>
<div>
          {movies.map(movie => (
            <div className='flex flex-col gap-y-1' key={movie.id}>
              <h2>{movie.title}</h2>
              
            </div>
          ))}
        </div>
        </div>
        
      
    </section>
  );
}
