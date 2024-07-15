import React from 'react'
import { useNavigate } from 'react-router-dom'
function VoteOutfits() {
    const navigate = useNavigate();
  
    const navigateToVirtualFashionShow = () => {
      navigate('/fashionshow');
    };
  return (
    <div>
        <section id="vote-on-outfits" className="hidden">
        <button onClick={() => navigateToVirtualFashionShow}>Back</button>
        <h1>Vote on Outfits</h1>
        <div className="outfit-card">
            <p>Outfit 1</p>
            <button className="upvote">Upvote</button>
            <button className="downvote">Downvote</button>
        </div>
        <div className="outfit-card">
            <p>Outfit 2</p>
            <button className="upvote">Upvote</button>
            <button className="downvote">Downvote</button>
        </div>
        <div className="outfit-card">
            <p>Outfit 3</p>
            <button className="upvote">Upvote</button>
            <button className="downvote">Downvote</button>
        </div>
    </section>

    </div>
  )
}

export default VoteOutfits