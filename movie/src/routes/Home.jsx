import React from 'react'
import Movie from '../Component/Movie'
import { useState, useEffect } from 'react';
import './Home.css'

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies)

  return (
    <div className='movie-home'>
        {loading ? <h1 className='loading'>Loading...</h1> : movies.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
        />
          ))}
    </div>
  )
}

export default Home