import React from 'react';

const Categories = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-10">
      <ul className="flex flex-wrap justify-center">
        <li className="mx-4 mb-4">Netflix Originals</li>
        <li className="mx-4 mb-4">Top Rated</li>
        <li className="mx-4 mb-4">Popular Now</li>
        <li className="mx-4 mb-4">&#60;-- FAKE</li>
      </ul>
    </div>
  );
}

export default Categories;