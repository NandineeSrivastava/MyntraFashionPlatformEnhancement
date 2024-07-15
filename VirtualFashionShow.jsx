import React from 'react'
import { useNavigate } from 'react-router-dom';
function VirtualFashionShow() {
    const navigate = useNavigate();
  
    const navigateToGamifiedExploration = () => {
      navigate('/games');
    };
    const navigateToEnterFashionshow = () => {
        navigate('/entershow');
      };
      const navigateToVoteOutfits = () => {
        navigate('/vote');
      };
  return (
    <div>
        <section id="fashion-show-overview" className="hidden">
        <button onClick={navigateToGamifiedExploration}>Back</button>
        <h1>Current Fashion Show</h1>
        <p>Theme: Summer Vibes</p>
        <h2>Top Entries:</h2>
        <div className="top-entry">Outfit 1</div>
        <div className="top-entry">Outfit 2</div>
        <div className="top-entry">Outfit 3</div>
        <button onClick={navigateToEnterFashionshow}>Enter Fashion Show</button>
        <button onClick={navigateToVoteOutfits}>Vote on Outfits</button>
    </section>
    </div>
  )
}

export default VirtualFashionShow