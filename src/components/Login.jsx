import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { useAuth } from './AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (validator.isEmail(email) && validator.isLength(password, { min: 6 })) {
      const userData = { email };
      login(userData);
      alert('Login successful!');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container py-10 mx-auto mt-8 flex justify-center">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Login</button>
        </form>
        <p className="mt-4 mb-4 text-sm">(You can use whatever (valid) email/password combination.)</p>
        <p>
          Don't have an account? <Link to="/register" className="text-blue-600">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
