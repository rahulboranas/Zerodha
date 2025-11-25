import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='row text-center p-5'>
                <h1>Technology</h1>
                <h3 className='text-muted fs-4 mt-3 mb-4'>Sleek , modern and intuitive trading platforms</h3>
                <p>check out our <a className='tdnone' href=''>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;