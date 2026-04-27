import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}  >
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bollywood">Bollywood</Link></li>
        <li><Link to="/hollywood">Hollywood</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/hollywood">Hollywood</Link></li> 
        <li><Link to="/fitness">Fitness</Link></li>
        <li><Link to="/food">Food</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;