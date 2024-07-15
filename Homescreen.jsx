import React from 'react'
import "./homescreen.css"
import Navbar from './Navbar'
import image6 from "../images/banner1.jpeg"
import image7 from "../images/banner2.jpeg"
import image8 from "../images/banner3.jpeg"
import image9 from "../images/download.jpeg"
function Homescreen(){
    let currentSlideIndex = 0;
  function showSlides() {
    const slides = document.querySelectorAll(".carousel_slider .img");
    const dots = document.querySelectorAll(".dot");
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlideIndex ? "block" : "none";
    });
    dots.forEach((dot, index) => {
      dot.className = index === currentSlideIndex ? "dot active" : "dot";
    });
  }

  function moveCarousel(n) {
    const slides = document.querySelectorAll(".carousel_slider .img");
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    showSlides();
  }

  function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlides();
}
  return(
    <> 
    <Navbar></Navbar>
        <section id="home-screen" className="visible">
          <div className="banner">
           <p>Explore the latest trends and style yourself!</p>
          </div>
           <section className="carousel">
            <div className="carousel_slider">
              <div className="content_inner_slider">
                <img src={image6} alt="Image 1" className="img"/>
                <img src={image7} alt="Image 2" className="img"/>
                <img src={image8} alt="Image 3" className="img"/>
                <img src={image9} alt="Image 4" className="img"/>
              </div>
           </div>
              <button className="prev_button" onClick={moveCarousel(-1)}>&#10094;</button>
              <button className="next_button" onClick={moveCarousel(1)}>&#10095;</button>
            <div className="dots">
                <span className="dot active" onClick={currentSlide(1)}></span>
                <span className="dot" onClick={currentSlide(2)}></span>
                <span className="dot" onClick={currentSlide(3)}></span>
                <span className="dot" onClick={currentSlide(4)}></span>
            </div>
        </section>
      </section>

</>)
}
export default Homescreen