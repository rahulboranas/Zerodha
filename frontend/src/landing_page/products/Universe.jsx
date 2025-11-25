import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center p-5'>
                <h3 className='text-muted'>The Zerodha Universe</h3>
                <p className='text-muted mt-3 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 text-center'>
                    <img src='Media/Images/smallcaseLogo.png'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Thematic Investing Platform</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img style={{ height: "50px" }} src='Media/Images/streakLogo.png'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Systematic trading Platform</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img style={{ height: "40px" }} src='Media/Images/sensibullLogo.svg'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Option trading Platform</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img style={{ height: "50px" }} src='Media/Images/zerodhaFundhouse.png'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Asset Management</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img style={{ height: "50px" }} src='Media/Images/goldenpiLogo.png'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Bonds Trading Platform</p>
                </div>
                <div className='col-4 p-3 text-center'>
                    <img style={{ height: "50px" }} src='Media/Images/dittoLogo.png'></img>
                    <p className='mt-3 text-muted' style={{ fontSize: "12px" }}>Insurance and health cares</p>
                </div>
                <div  >
                    <button className='p-2 fs-5 btn btn-primary mb-5 mt-5' style={{ width: "20%" }}>Signup Now</button>
                </div>
            </div>

        </div>
    );
}

export default Universe;