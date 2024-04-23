import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">404 - Page Not Found</h1>
          <p className="text-lg text-center">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
