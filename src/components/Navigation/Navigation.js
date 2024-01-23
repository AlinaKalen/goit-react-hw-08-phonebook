import React from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from '../UseAut/UseAut';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Link to="/">
        Phone<span>Book.</span>
      </Link>
      <nav>
        {isLoggedIn ? (
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        ) : (
            <p>Not logged in</p> 
        )}
      </nav>
    </>
  );
};

export default Navigation;
