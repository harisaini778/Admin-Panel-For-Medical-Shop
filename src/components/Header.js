import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Import the faCartPlus icon

const Header = () => {
    return (
        <div>
            <nav className="header-nav">
                <div className="header-box">
                    <div className="header-box-items">
                        <h1>Salific Pharmaceuticals</h1>
                    </div>
                    <div className="header-box-items">
                        <button className="button-cart">
                            <div className="row">
                              <div className="col">
                                    <FontAwesomeIcon icon={faCartPlus} size ="2x" className='cart-icon' /> 
                                </div>
                                <div className="col"><h3>Your Cart Items</h3> </div>
                                <div className="col badge">
                                    <h2 className='cart-number'>
                                     0
                                    </h2>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
