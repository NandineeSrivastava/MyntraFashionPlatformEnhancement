import React from 'react'
import { useNavigate } from 'react-router-dom'
function GamifiedExploration() {
    const navigate = useNavigate();
  
    const navigateToVirtualFashionShow = () => {
      navigate('/fashionshow');
    };

    const navigateToDressupgame = () => {
        navigate('/dressup');
      };
      
      const navigateToZgames = () => {
        navigate('/zgames');
      };
  
  return (
    <div>
        <section id="gamified-trend-exploration" className="visible">
        <button onClick={navigateToZgames}>Back to ZGames</button>
        <h1>Gamified Trend Exploration</h1>
        <p>Explore fashion trends through engaging activities!</p>
        <button onClick={navigateToVirtualFashionShow}>Virtual Fashion Show</button>
        <button onClick={navigateToDressupgame}>Dress Up Game</button>
    </section>
    </div>
  )
}

export default GamifiedExploration