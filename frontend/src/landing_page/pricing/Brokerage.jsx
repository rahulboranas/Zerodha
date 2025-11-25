import React from 'react';
function Brokerage() {
    return (
        <div className='container'>
            <div className='row border-top text-center p-5'>
                <div className='col-8 p-5'>
                    <a href='' className='tdnone '><h5>Brokerage Calculator</h5></a>
                    <ul className='text-muted mt-3' style={{textAlign:"left", lineHeight:"2.1",fontSize:"14px"}}>
                       <li>₹100 per order for futures and options.</li>
                       <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower)</li>
                       <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                       <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                       <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                       <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>
                </div>
                <div className='col-4 p-5'>
                     <a href='' className='tdnone '><h5>List Of Charges</h5></a> 
                </div>
            </div>
        </div>
     );
}

export default Brokerage;