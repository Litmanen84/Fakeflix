import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import backgroundImage from '../assets/JohnFlix.jpg';

const API_KEY = '48c8ef59d60ffa1c7cb47ae558ad2677';

const SeriesDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [similarSeries, setSimilarSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Error in the API call');
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('The response is not in JSON format');
        }

        const data = await response.json();
        setDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSimilarSeries = async () => {
      try {
        const url = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Error in the API call');
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('The response is not in JSON format');
        }

        const data = await response.json();
        setSimilarSeries(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchDetails();
    fetchSimilarSeries();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto rounded-lg">
        <div className="grid grid-cols-1">
            <div className="px-10 py-10 bg-gray-100 text-white flex justify-between items-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})` }}>
                <div className="mr-8">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                        alt={details.name}
                        className="rounded-lg mb-4"
                        style={{ width: '300px' }}
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">{details.name}</h1>
                    <p className="text-lg mb-2">Rating: {details.vote_average}</p>
                    <p className="text-lg mb-2">Release Date: {details.first_air_date}</p>
                    <p className="text-lg mb-2">Duration: {details.episode_run_time} minutes</p>
                    <p className="text-lg mb-2">Number of Seasons: {details.number_of_seasons}</p>
                    <p className="text-lg mb-2">Number of Episodes: {details.number_of_episodes}</p>
                    <p className="text-lg mb-2">Overview: {details.overview}</p>
                </div>
            </div>
            <div className="p-4 bg-gray-100 text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImage})` }}>
                <h2 className="text-2xl font-bold mb-4 px-6">Similar Series</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {similarSeries.map(tvshow => (
                        <div key={tvshow.id} className="text-center rounded-lg p-4">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
                                alt={tvshow.name}
                                style={{ height: '350px', width: 'auto' }}
                                className="rounded-lg mx-auto"
                            />
                            <p className="text-lg font-semibold mt-2">{tvshow.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

}

export default SeriesDetail;
