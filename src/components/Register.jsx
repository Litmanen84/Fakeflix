import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validator.isEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validator.isLength(password, { min: 6 })) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!validator.isLength(username, { min: 6 })) {
      setError('Username must be at least 6 characters long');
      return;
    }

    alert('Successfully registered!');
    navigate('/');
  };


  return (
    <div className="container py-10 mx-auto mt-8 flex justify-center">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="repeatPassword" className="block text-sm font-semibold mb-2">Repeat Password</label>
            <input
              type="password"
              id="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Register</button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
