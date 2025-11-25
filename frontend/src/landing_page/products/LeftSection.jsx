import React from 'react';
function LeftSection({imageURL , productName ,productDescription , tryDemo , learnMore , googlePlay , appStore }) {
    return (
        <div className='container p-5'>
            <div className='row mt-5 mb-5 text-muted'>
                <div className='col-6 '>
                    <img src={imageURL}></img>
                    
                </div>
                <div className='col-6 ' style={{padding:"60px", paddingLeft:"80px"}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a className='tdnone me-5' href={tryDemo}>TryDemo <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='tdnone' href={learnMore}>LearnMore <i class="fa-solid fa-arrow-right"></i> </a>
                     
                     
                        
                    </div>
                    <div className='mt-3'>
                          <a className='me-5' href={googlePlay}><img src='Media/Images/googlePlayBadge.svg'></img></a>
                            <a href={appStore}><img src='Media/Images/appstoreBadge.svg'></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;