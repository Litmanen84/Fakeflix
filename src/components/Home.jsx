import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Categories from './Categories';
import { MovieList, TVShowList } from './Lists';
import { getMovies, getTVShows } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesData = await getMovies();
        const tvShowsData = await getTVShows();
        setMovies(moviesData);
        setTVShows(tvShowsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-black'>
      <Hero />
      <Categories />
      <div id="popular-movies">
      <MovieList movies={movies} />
      </div>
      <div id="popular-shows">
      <TVShowList tvShows={tvShows} />
      </div>
    </div>
  );
}

export default Home;
