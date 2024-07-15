import React from 'react'
import { useNavigate } from 'react-router-dom';
function SubmitOutfit() {
    const navigate = useNavigate();
  
    const navigateToCommunityVoting = () => {
      navigate('/comvote');
    };
    const navigateToCreateOutfit = () => {
        navigate('/createoutfit');
      };
  return (
    <div>
        <section id="submit-outfit" className="visible">
        <h1>Review and Submit Your Outfit</h1>
        <p>Final Look</p>
        <div class="outfit-display">
            <p id="selected-top"></p>
            <p id="selected-bottom"></p>
            <p id="selected-shoes"></p>
            <p id="selected-accessories"></p>
        </div>

        <button onClick={navigateToCommunityVoting}>Submit</button>
        <button onClick={navigateToCreateOutfit}>Back to Create Outfit</button>
    </section>
    </div>
  )
}

export default SubmitOutfit