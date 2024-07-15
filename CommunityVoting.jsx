import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

   

function CommunityVoting() {
    const navigate = useNavigate();
  
    const navigateToHomescreen = () => {
      navigate('/homescreen');
    };

  return (
    <div>
        <Navbar></Navbar>
         <section id="community-voting" className="visible">
        <h1>Vote on Outfits</h1>
        <div className="outfit-feed">
            <div className="outfit-card">
                <p>Outfit 1</p>
                <button>👍</button>
                <button>⭐</button>
            </div>
            <div className="outfit-card">
                <p>Outfit 2</p>
                <button>👍</button>
                <button>⭐</button>
            </div>
        </div>
        <button onClick={navigateToHomescreen}>Back to Home</button>
    </section>
    </div>
  )
}

export default CommunityVoting