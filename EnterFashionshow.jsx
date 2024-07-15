import React from 'react'
import { useNavigate } from 'react-router-dom';
function EnterFashionshow() {
    const navigate = useNavigate();
  
    const navigateToVirtualFashionShow = () => {
      navigate('/fashionshow');
    };

  return (
    <div>
        <section id="enter-fashion-show" className="hidden">
        <button onClick={navigateToVirtualFashionShow}>Back</button>
        <h1>Enter Fashion Show</h1>
        <form id="upload-form">
            <input type="file" id="outfit-upload" required/>
            <button type="submit">Upload</button>
        </form>
    </section>
    </div>
  )
}

export default EnterFashionshow