import React from 'react'
// import download from "./Component/download.jpg"


const Header = () => {
    return (
        <header>
            
            <div className="main-header">
            <img src="./Images/avenger-3.jpg" alt="" />
                <div className="text">
                    <h1 data-aos="zoom-in" data-aos-delay="300" data-aos-duration="4000"> The Avengers </h1>
                   <p data-aos="zoom-in"   data-aos-delay="500" data-aos-duration="4000">Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
                </div>
                
            </div>
        
        </header>
    )
}

export default Header
