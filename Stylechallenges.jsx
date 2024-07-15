import React from 'react'
import "./stylechallenge.css"
import { useNavigate } from 'react-router-dom';
function Stylechallenges() {
    console.log("hello");
    const navigate = useNavigate();

    const navigateToCreateOutfit = () => {
        navigate('/createoutfit');
      };
      const navigateToChallengeDetails = () => {
        navigate('/challengedetails');
      };
  return (
    <div>
        <section id="style-challenges" className="visible">
        <h1>Personal Style Challenges</h1>
        <div className="challenge-card" onClick={navigateToChallengeDetails}>
            <h2>Beach Day</h2>
            <p>Design your perfect beach outfit</p>
        </div>
        <div className="challenge-card" onClick={navigateToChallengeDetails}>
            <h2>Winter Wonderland</h2>
            <p>Create a stylish winter look</p>
        </div>
        <button onClick={navigateToCreateOutfit}>Join Challenge</button>
    </section>
    </div>
  )
}

export default Stylechallenges