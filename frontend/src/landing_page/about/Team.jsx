import React from 'react';
function Team() {
    return (
        <div className='container'>
            <div className='row text-center p-5 mt-5  border-top'>
                <h1 className='fs-2'>People</h1>
            </div>
            <div className='row p-5 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 pe-5 text-center'>
                    <img src='Media/Images/nithinKamath.jpg' style={{ width: "50%", borderRadius: "100%" }}></img>
                    <h4 className='pt-3'>Nithin Kamarth</h4>
                    <h5>founder , CEO </h5>
                </div>
                <div className='col-6 ps-5' >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p><a className='tdnone' href=''>Connect on Homepage</a> / <a className='tdnone' href=''>TradingQnA</a> / <a className='tdnone' href=''>Twitter</a></p>
                </div>
            </div>
             <div className='row p-5 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                   <div className='col-6 pe-5' >
                    <p>Rahul bootstrapped and founded Unknown in 20xy to overcome the hurdles he faced during his decade long stint as a xyz. Today, XYZ has changed the landscape of the Indian XYZ industry.</p>

                    <p>He is a member of the XYZ Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing football is his zen.</p>

                    <p><a className='tdnone' href=''>Connect on Homepage</a> / <a className='tdnone' href=''>TradingQnA</a> / <a className='tdnone' href=''>Twitter</a></p>
                </div>
                <div className='col-6 pe-5 text-center'>
                    <img src='Media/Images/rahulBorana.jpg' style={{ width: "50%", borderRadius: "100%" }}></img>
                    <h4 className='pt-3'>Rahul Borana</h4>
                    <h5>founder , CEO </h5>
                </div>
             
            </div>
        </div>
    );
}

export default Team;