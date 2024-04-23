import React from 'react';
import backgroundImage from '../assets/JohnFlix.jpg';

const Hero = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-gray-900 bg-opacity-45 text-white py-20 px-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Benvenuti su JohnFlix</h1>
        <p className="text-lg mb-8">Guarda i tuoi film e serie TV preferiti ovunque e in qualsiasi momento.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Inizia</button>
      </div>
    </div>
  );
}

export default Hero;