import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import image1 from "../images/bagicon.png"
import image2 from "../images/Myntra-Logo.png"
import image3 from "../images/Zgames.png"
import image4 from "../images/whishlisticon.png"
import image5 from "../images/free-profile-3484746-2917913.webp"
function Navbar() { 
    const navigate = useNavigate();
  
    const navigateToZgames = () => {
      navigate('/zgames');
    };
  
    const navigateToStyleChallenges = () => {
      navigate('/challenges');
    };

    const navigateToFashionQuizzes = () => {
        navigate('/fashionquizzes');
      };

      const navigateToHomescreen = () => {
        navigate('/homescreen');
      };

      const navigateToGamifiedExploration = () => {
        navigate('/games');
      };
      function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');
        } else {
            dropdown.classList.add('hidden');
        }
      }
    //   document.getElementById('home-screen').classList.add('visible');
    //   document.getElementById('zgames').classList.add('hidden');

  return (
    <div> 
    <header>
        <nav>
            <div className="logo">
                <img src={image2} alt="Logo"/>
            </div>
            <ul className="nav-links">
                <li><a href="#" onClick={navigateToHomescreen}>Home</a></li>
                <li>
                    <a href="#">ZGames</a>
                    <div className="dropdown">
                        <img src={image3} alt="ZGames Image"/>
                        <h3>Explore ZGames</h3>
                        <p>Discover exciting fashion challenges and games.</p>
                        <button onClick={navigateToZgames}>Explore ZGames</button>
                    </div>
                </li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
                <li><a href="#">Home & Living</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Studio</a></li>
            </ul>
            <div className="nav-icons">
                <a href="#"><img src={image5} alt="Profile"/></a>
                <a href="#"><img src={image4} alt="Wishlist"/></a>
                <a href="#"><img src={image1} alt="Bag"/></a>
            </div>
        </nav>
    </header></div>
  )
}

export default Navbar