import React from 'react';
function RightSection({ imageURL, productName, productDescription, learnMore, Connecto }) {
    return (
        <div className='container '>
            <div className='row  text-muted'>
                <div className='col-6 p-5' style={{ marginTop: "8rem" }}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a className='tdnone' href={learnMore}>{Connecto} <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='col-6'>
                    <img src={imageURL}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;