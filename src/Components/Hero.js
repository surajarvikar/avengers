import React from 'react'

const Hero = () => {
    
    return (
        <>
            <div className="main-hero-div">
                <div className="container-fluid">
                    <h1 className="heading-1">  TOP CAST </h1>
                    <div className="row hero-row">
                       <div className="col-lg-4 col-12 sub-hero" data-aos="fade-right" >
                           <div className="image-box">
                                <img src="./Images/chris.jpg" alt="chris" />
                           </div>
                           <div className="text-hero">
                               <h1>chris</h1>
                               <p>Captain America</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                       <div className="col-lg-4 col-12 sub-hero" data-aos="fade-up"   data-aos-delay="500">
                           <div className="image-box">
                                <img src="./Images/robert.jpg" alt="robert" />
                           </div>
                           <div className="text-hero">
                               <h1>Robert</h1>
                               <p>Iron Man</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                       <div className="col-lg-4 col-12 sub-hero"  data-aos="fade-left"   data-aos-delay="300">
                           <div className="image-box">
                                <img src="./Images/tom.jpg" alt="tom" />
                           </div>
                           <div className="text-hero">
                               <h1>Tom</h1>
                               <p>Spider Man</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                       <div className="col-lg-4 col-12 sub-hero" data-aos="fade-right">
                           <div className="image-box">
                                <img src="./Images/josh.jpg" alt="josh" />
                           </div>
                           <div className="text-hero">
                               <h1>josh</h1>
                               <p>Thanos</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                       <div className="col-lg-4 col-12 sub-hero" data-aos="fade-down"   data-aos-delay="500">
                           <div className="image-box">
                                <img src="./Images/natasha.jpg" alt="natasha" />
                           </div>
                           <div className="text-hero">
                               <h1>Natasha</h1>
                               <p> scarlet</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                       <div className="col-lg-4 col-12 sub-hero" data-aos="fade-right"   data-aos-delay="300">
                           <div className="image-box">
                                <img src="./Images/mark.jpg" alt="chris" />
                           </div>
                           <div className="text-hero">
                               <h1>Mark</h1>
                               <p>Hulk</p>
                           </div>
                       </div>
                       {/* ===================================*/}
                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
