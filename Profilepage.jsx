import React from 'react'
import { useNavigate } from 'react-router-dom';

function Profilepage() {
    const navigate = useNavigate();

    const navigateToHomescreen = () => {
        navigate('/homescreen');
    };
  return (
    <div>
        <section id="profile-page" className="visible">
        <h1>User Profile</h1>
        <p>Name: User A</p>
        <p>Submitted Challenges: 5</p>
        <p>Points: 200</p>
        <p>Rewards: Discount Coupons</p>
        <button onClick={navigateToHomescreen}>Back to Home</button>
    </section>
    </div>
  )
}

export default Profilepage;