import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./leaderboard.css"
function Leaderboard() {
    const navigate = useNavigate();

    const navigateToProfilepage = () => {
        navigate('/profile');
    }; 
    const navigateToHomescreen = () => {
        navigate('/homescreen');
    }; 

  return (
    <div>
        <section id="leaderboard-rewards" className="visible">
        <h1>Leaderboard and Rewards</h1>
        <div className="leaderboard">
            <p>1. User A</p>
            <p>2. User B</p>
            <p>3. User C</p>
        </div>
        <p>Rewards: Discounts, Badges</p>
        <button onClick={navigateToProfilepage}>View Profile</button>
        <button onClick={navigateToHomescreen}>Back to Home</button>
    </section>
    </div>
  )
}

export default Leaderboard