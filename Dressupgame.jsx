import React from 'react'

function Dressupgame() {
  return (
    <div>
        <section id="dress-up-game" className="visible">
        <button onClick={navigateToGamifiedExploration}>Back</button>
        <h1>Dress Up Game</h1>
        <div className="wardrobe">
            <div className="category">
                <h2>Tops</h2>
                <div className="item">Top 1</div>
                <div className="item">Top 2</div>
            </div>
            <div className="category">
                <h2>Bottoms</h2>
                <div className="item">Bottom 1</div>
                <div className="item">Bottom 2</div>
            </div>
            <div className="category">
                <h2>Shoes</h2>
                <div className="item">Shoes 1</div>
                <div className="item">Shoes 2</div>
            </div>
            <div className="category">
                <h2>Accessories</h2>
                <div className="item">Accessory 1</div>
                <div className="item">Accessory 2</div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Dressupgame