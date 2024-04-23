import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/JohnFlix.jpg';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list bg-gray-100 text-white rounded-lg p-4" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})` }}>
      <h2 className="text-xl font-bold mb-4 pl-7">Popular Movies</h2>
      <div className="grid grid-cols-5 gap-4">
        {movies.slice(0, 10).map(movie => (
          <div key={movie.id} className="flex flex-col items-center">
            <Link to={`/movie/${movie.id}`} className="block">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                style={{ height: '350px', width: 'auto' }}
                className="rounded-lg mx-auto"
              />
              <p className="text-center text-lg font-semibold text-white-800">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const TVShowList = ({ tvShows }) => {
  return (
    <div className="tv-show-list bg-gray-100 rounded-lg p-4 text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})` }}>
      <h2 className="text-xl font-bold mb-4 pl-7">Popular Series</h2>
      <div className="grid grid-cols-5 gap-4">
        {tvShows.slice(0, 10).map(tvShow => (
          <div key={tvShow.id} className="flex flex-col items-center">
            <Link to={`/tvshow/${tvShow.id}`} className="block">
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow.name}
                style={{ height: '350px', width: 'auto' }}
                className="rounded-lg mx-auto"
              />
              <p className="text-center text-lg font-semibold text-white-800">{tvShow.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MovieList, TVShowList };
