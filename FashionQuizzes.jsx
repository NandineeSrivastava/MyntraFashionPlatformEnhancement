import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./fashionquiz.css"
function FashionQuizzes() {
    const navigate =useNavigate();

    const navigateToZgames = () => {
        navigate('/zgames');
      };

      const navigateToTriviagame = () => {
        navigate('/trivia');
      };
  
  return (
    <div>
        <section id="fashion-games" className="visible">
        <button  onClick={navigateToZgames} >Back to ZGames</button>
        <h1>Fashion Quizzes</h1>
        <div className="zgames-buttons">
            <button onClick= {navigateToTriviagame} >Start/Take Quiz</button>
        </div>
    </section>

    </div>
  )
}

export default FashionQuizzes