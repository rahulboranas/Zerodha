import React from 'react';
function Pricing() {
    return (
    <div className='container mb-5 '>
        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                <p>We pioneerd The concept of discount broking and price transparency in India flat fees and no hidden charges</p>
                <a href='' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col border p-3' >
                        <h1 className='mb-3 '>&#8377;0</h1>
                        <p>Free equity delivery and<br></br>direct mutual funds</p>
                    </div>
                     <div className='col border p-3' >
                        <h1 className='mb-3 '>&#8377;20</h1>
                        <p>Intraday and f&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default Pricing;