import React from 'react'
import './createoutfit.css';
import { useNavigate } from 'react-router-dom';
import image14 from "../images/top1.jpg"
import image15 from "../images/top2.jpg"
import image16 from "../images/bottom1.jpg"
import image17 from "../images/bottom2.jpg"
import image18 from "../images/fw1.jpg"
import image19 from "../images/fw2.jpg"
import image20 from "../images/acc1.jpg"
import image21 from "../images/acc2.jpg"
function CreateOutfit() {
    const navigate = useNavigate();
  
    const navigateToSubmitOutfit = () => {
      navigate('/submitoutfit');
    };
  
    const navigateToChallengeDetails = () => {
      navigate('/challengedetails');
    };
    let selectedItems = {
        top: '',
        bottom: '',
        shoes: '',
        accessories: ''
    };
    function selectItem(category, image) {
        selectedItems[category] = image;
       
    }
  return (
     <div>
         <section id="create-outfit" className="visible">
        <h1>Create Your Outfit</h1>
        <div className="wardrobe">
            <div className="category">
                <h2>Tops</h2>
                <div className="item">
                    <img src={image14} alt="Top 1" className="item" onClick={selectItem('top', 'top1.png')}/>
                </div>
                <div className="item">
                    <img src={image15} alt="Top 2" className="item" onClick={selectItem('top', 'top2.png')}/>
                </div>
            </div>
            <div className="category">
                <h2>Bottoms</h2>
                <div className="item">
                    <img src={image16} alt="Bottom 1 Image" className="item" onClick={selectItem('bottom', 'bottom1.png')}/>
                </div>
                <div className="item">
                    <img src={image17} alt="Bottom 2 Image" className="item" onClick={selectItem('bottom', 'bottom2.png')}/>
                    </div>
            </div>
                <div className="category">
                    <h2>Shoes</h2>
                    <div className="item">
                        <img src={image18} alt="Shoes 1 Image" className="item" onClick={selectItem('shoes', 'shoes1.png')}/>
                    </div>
                    <div className="item">
                        <img src={image19} alt="Shoes 2 Image" className="item" onClick={selectItem('shoes', 'shoes2.png')}/>
                    </div>
                </div>
                <div className="category">
                    <h2>Accessories</h2>
                    <div className="item">
                        <img src={image20} alt="Accessory 1 Image" className="item" onClick={selectItem('accessories', 'accessories1.png')}/>
                    </div>
                    <div className="item">
                        <img src={image21} alt="Accessory 2 Image" className="item" onClick={selectItem('accessories', 'accessories2.png')}/>
                    </div>
                </div>
            </div>
    
      <button onClick={navigateToSubmitOutfit} >Submit Outfit</button>
         <button onClick={navigateToChallengeDetails}>Back to Challenge Details</button>
   </section>
   </div>
 )
 }

 export default CreateOutfit