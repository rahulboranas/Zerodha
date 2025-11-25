import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='text-center text-muted p-5 mt-3 mb-5 '>
                <h3>Charges</h3>
                <h5>List of all charges and taxes</h5>
            </div>
            
             <div className='row p-5'>
                 <div className='col-4 text-center p-3'>
                    <img className='mb-3' src='Media/Images/pricing0.svg'></img>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                 </div>
                  <div className='col-4 text-center p-3'>
                    <img className='mb-3' src='Media/Images/intradayTrades.svg'></img>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                 </div>
                  <div className='col-4 text-center p-3'>
                    <img className='mb-3' src='Media/Images/pricing0.svg'></img>
                    <h3>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                 </div>
                 
             </div>
        </div>
     );
}

export default Hero;