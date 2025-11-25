import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
       
            <nav class="navbar navbar-expand-lg border-bottom">
                <div class="container p-2">
                      <Link class="navbar-brand" to="/"> <img src='Media/Images/logo.svg' style={{width:"25%"}}></img></Link>
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      
                        <form class="d-flex" role="search">
                             <ul class="navbar-nav  mb-lg-0">
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Signup">SignUp</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link class="nav-link active" to="/About" >About</Link>
                            </li>       
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Products">Product</Link>
                            </li>    
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Pricing">Pricing</Link>
                            </li>    
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Supports">Support</Link>
                            </li>    
                             <li class="nav-item">
                                <a class="nav-link active" href='https://zerodha-l2fe.vercel.app/'>Dashboard</a>
                            </li>                                   
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;