import React from 'react'
import "./challengedetails.css"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function ChallengeDetails() {
    const navigate = useNavigate();
  
    const navigateToCreateOutfit = () => {
      navigate('/createoutfit');
    };
  
    const navigateToStyleChallenges = () => {
      navigate('/challenge');
    };
      
      
  return (
    <div>
        <Navbar></Navbar>
        <section id="challenge-details" className="visible">
        <h1>Beach Day Challenge</h1>
        <p>Design your perfect beach outfit</p>
        <ul>
            <li>Theme description</li>
            <li>Rules and guidelines</li>
            <li>Example outfits</li>
            <li>Start and end dates</li>
        </ul>
        <button onClick={navigateToCreateOutfit}>Join Challenge</button>
        <button onClick={navigateToStyleChallenges}>Back to Challenges Overview</button>

    </section>
    </div>
  )
}

export default ChallengeDetails;