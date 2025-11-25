import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <img src='/Media/Images/homeHero.png' alt='Hero Image' className='p-5 mb-5'></img>
                <h1>Invest in erverything</h1>
                <p>Online Platform to invest in stocks derivatives mutual funds , and more</p>
                <button className='p-2 fs-5 btn btn-primary mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;