import React from 'react';
function Hero() {
    return (
        <section className='container-fluid p-5' id='supportHero'>
            <div className='pt-2' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a style={{ color: "white" }} href=''>Track Ticket</a>
            </div>
            <div className='row'>
                <div className='col-6 ' style={{ padding: "70px" }}>
                    <h4>Search for an answer or browse helps topic to create a ticket</h4>
                    <input style={{ width: "80%", padding: "15px", borderRadius: "7px", border: "none", margin: "25px 0" }} type='text' placeholder='Eg: How do i activate F&O, why my order is getting rejected..'></input><br></br>
                    <a style={{ color: "white" }} href=''>Track account opening</a>
                    <a style={{ color: "white" }} href=''>Track segment action</a>
                    <a style={{ color: "white" }} href=''>Intraday</a>
                    <a style={{ color: "white" }} href=''>margins</a> <br></br>
                    <a style={{ color: "white" }} href=''>Kite user manual</a>
                    <a style={{ color: "white" }} href=''>Track account opening</a>
                </div>
                <div className='col-6 p-5'>
                    <h4>Featured</h4>
                    <ol type='1'>
                        <li><a style={{ color: "white" }} href=''>Current takeovers and Delisting-january 2024</a></li>
                        <li><a style={{ color: "white", paddingTop: "15px", display: "inline-block" }} href=''>Latest Intraday leverages -MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;