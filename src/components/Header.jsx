// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/NSymbol.jpg';
import { useAuth } from './AuthContext';
import fakeUser from './CreateFake';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <div>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Netflix Logo" className="h-8 mr-2" />
          <span className="text-2xl font-bold">JohnFlix</span>
        </Link>
      </div>
      <nav className="flex justify-center">
        <ul className="flex space-x-6">
          <li><a href="/#popular-shows">TV Shows</a></li>
          <li><a href="/#popular-movies">Movies</a></li>
        </ul>
      </nav>
      <div>
        <ul className="flex space-x-6">
          {user ? (
            <>
              <li><span>Welcome, {fakeUser}</span></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
