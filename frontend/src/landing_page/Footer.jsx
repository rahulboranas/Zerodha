import React from 'react';
function Footer() {
    return (
     <footer className='mt-5 border' style={{ backgroundColor: "rgb(255, 250, 250)" }}>
        <div className='container mt-5 pt-5 mb-5'>
            <div className='row'>
                <div className='col-3'>
                    <img src='Media/Images/logo.svg' style={{ width: "60%", marginBottom: "12px" }} ></img>
                    <p>&copy; 2010 - 2024 , Not Zerodha Broking ltd. All rights reserved</p>
                </div>
                <div className='col-3'>
                    <p className='mb-3' style={{ fontSize: "20px" }}>Company</p>
                    <a className='foot-point' href=''>About</a><br></br>
                    <a className='foot-point' href=''>Product</a><br></br>
                    <a className='foot-point' href=''>Pricing</a><br></br>
                    <a className='foot-point' href=''>Referrel Programme</a><br></br>
                    <a className='foot-point' href=''>Careers </a><br></br>
                    <a className='foot-point' href=''>Zerodha.tech</a><br></br>
                    <a className='foot-point' href=''>Press & Media </a><br></br>
                    <a className='foot-point' href=''>Zerodha cares(CSR) </a><br></br>
                </div>
                <div className='col-3'>
                    <p className='mb-3' style={{ fontSize: "20px" }}>Support</p>
                    <a className='foot-point' href=''>Contact </a> <br></br>
                    <a className='foot-point' href=''>Support Portal </a><br></br>
                    <a className='foot-point' href=''>z-Connect blog </a><br></br>
                    <a className='foot-point' href=''>List of charges </a><br></br>
                    <a className='foot-point' href=''>Downloads & resources</a><br></br>
                </div>
                <div className='col-3'>
                    <p className='mb-3' style={{ fontSize: "20px" }}>Account</p>
                    <a className='foot-point' href=''>Open an Account</a><br></br>
                    <a className='foot-point' href=''>fund transfer</a><br></br>
                    <a className='foot-point' href=''>60 days challenge</a><br></br>
                </div>
                <div className='mt-5 text-muted'style={{fontSize:"12px"}}>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF<br></br><br></br>

                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances<br></br><br></br>

                    Smart Online Dispute Resolution | Grievances Redressal Mechanism<br></br><br></br>

                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.<br></br><br></br>

                    Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3 Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.<br></br><br></br>
                </div>
            </div>

        </div>
      </footer>   

    );
}

export default Footer;