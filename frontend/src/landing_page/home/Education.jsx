import React from 'react';
function Education() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/Images/education.svg' style={{ width: "80%" }}></img>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>varsity , the largest online stock market education book in the world<br></br> everything from the basic to advanced trading</p>
                    <a href='' style={{ textDecoration: "none" }}>versity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>Trading Q&A , the most active ttrading & investment community in <br></br> india for all your market related queries. </p>
                    <a href='' style={{ textDecoration: "none" }}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
    );
}

export default Education;