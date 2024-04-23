const API_KEY = '48c8ef59d60ffa1c7cb47ae558ad2677';

export const getMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const getTVShows = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};