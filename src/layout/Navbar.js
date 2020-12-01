import React from 'react'
import ReactDOM from 'react-dom';


export default function Navbar() {
    return (
        <>
        <div className="bg-white sticky-top">
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-3">
                    <img  src="https://demo.activeitzone.com/ecommerce/public/uploads/all/nLBoBtHBqBvBJPn17WtMMNM8xlSeqETXjOWTUqR7.svg" className="logo"/>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-danger" type="submit">Go</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <ul className="top-header-icons">
                                <li>
                                    <i class="fa fa-refresh cart-icon" aria-hidden="true"></i>
                                    <span className="cart-qty">0</span>
                                    <span className="cart-text">Compare</span>
                                </li>

                                <li>
                                    <i class="fa fa-heart cart-icon" aria-hidden="true"></i>
                                    <span className="cart-qty">0</span>
                                    <span className="cart-text">Wishlist</span>
                                </li>

                                <li>
                                    <i class="fa fa-shopping-bag cart-icon" aria-hidden="true"></i>
                                    <span className="cart-qty">0</span>
                                    <span className="cart-text">Cart</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
