import { Link } from "react-router-dom";
import { UserContext } from './UserContext';
import { useState, useContext } from 'react'

const Navbar = () => {

    // Get the shared global value from App.js using the UserContext shared object.
    const {user, setUser} = useContext(UserContext);


    return (
      <nav className="navbar">
        <h1>Handshake</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/login" className="round-button">Login</Link>
          <p></p>
        </div>
      </nav>
    );
  }
   
  export default Navbar;