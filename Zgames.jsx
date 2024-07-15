import React from 'react'
import "./zgames.css"
import { useNavigate } from 'react-router-dom'
import image10 from "../images/main.jpg"
import image11 from "../images/stylechal.jpg"
import image12 from "../images/quiz.jpg"
import image13 from "../images/gamifiedexp.jpg"
function Zgames() {
    const navigate = useNavigate();
  
    const navigateToFashionQuizzes = () => {
      navigate('/fashionquizzes');
    };
  
    const navigateToStyleChallenges = () => {
      navigate('/challenge');
    };

    const navigateToGamifiedExploration = () => {
        navigate('/games');
      };
      
  return (
    <div> 
       <section id="zgames" className="visible">
        
        <div className="main-banner">
            <img src={image10} alt="Main Banner"/>
            <div className="banner-text">
                <h2>Best Time to be a Fashion Expert!</h2>
                
            </div>
        </div>
        <div className="zgames-buttons">
            <div className="game-option" onClick={navigateToStyleChallenges}>
                <img src={image11} alt="Style Challenges"/>
                <button>Style Challenges</button>
            </div>
            <div className="game-option" onClick={navigateToFashionQuizzes}>
                <img src={image12} alt="Fashion Games"/>
                <button>Fashion Games</button>
            </div>
            <div className="game-option" onClick={navigateToGamifiedExploration}>
                <img src={image13} alt="Gamified Exploration"/>
                <button>Gamified Exploration</button>
            </div>
        </div>
        </section>
   </div>
  )
}

export default Zgames