import React, { useState, useEffect } from 'react';
import './triviagame.css';
import { useNavigate } from 'react-router-dom';
const Triviagame = () => {
    const [question, setQuestion] = useState(null);
    const [choices, setChoices] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=1')
            .then(response => response.json())
            .then(data => {
                const questionData = data.results[0];
                setQuestion(questionData.question);
                setChoices([...questionData.incorrect_answers, questionData.correct_answer].sort(() => Math.random() - 0.5));
            });
    }, []);

    const navigate = useNavigate();
  
    const navigateToFashionQuizzes = () => {
      navigate('/fashionquizzes');
    };

    const handleAnswer = (choice) => {
        if (choice === question.correct_answer) {
            setScore(score + 1);
        } else {
            alert('Wrong answer');
        }
    };

    return (
        <div>
            <h1>Trivia Game</h1>
            {question && (
                <>
                    <p dangerouslySetInnerHTML={{ __html: question }}></p>
                    {choices.map((choice, index) => (
                        <button key={index} onClick={() => handleAnswer(choice)}>
                            {choice}
                        </button>
                    ))}
                </>
            )}
            <p>Score: {score}</p>
            <section id="trivia-app-section" className="visible">
        <button onClick={navigateToFashionQuizzes}>Back to Fashion Games</button>
        <div id="trivia-app"></div>
    </section>
        </div>
    );
};

export default Triviagame;
