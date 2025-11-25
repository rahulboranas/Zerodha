import React from 'react';
function Award() {
    return ( 
       <div>
           <div className='container mt-3'>
               <div className='row p-5'>
                   <div className='col-6 '>
                    <img src='Media/Images/largestBroker.svg'></img>
                   </div>
                   <div className='col-6 mt-3 p-5'>
                       <h1>Largest stock broker in India</h1>
                       <p>2+ Million zerodha clients contributes to over 15% of all the volume in India daily by trading and investing in :</p>
                       <div className='row '>
                           <div className='col-6'>
                               <ul>
                                   <li><p>Futures and Options</p></li>
                                   <li><p>Commoding derivatives</p></li>
                                   <li><p>Currency derivatives Securites</p></li>
                               </ul>
                           </div>
                           <div className='col-6'>
                               <ul>
                                   <li><p>Stocks and IPOS</p></li>
                                   <li><p>Direct Mutual Funds</p></li>
                                   <li><p>Bonds And Govn. Securites</p></li>
                               </ul>
                           </div>
                       </div>
                       <img src='Media/Images/pressLogos.png' style={{width:"90%"}}></img>
                   </div>
               </div>
           </div>
       </div>
     );
}

export default Award;

