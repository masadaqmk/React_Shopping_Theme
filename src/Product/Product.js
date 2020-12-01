import React from 'react'
import ReactDOM from 'react-dom';
import './product.css';



function Product(props) {
    return (
        <div className="card product-card">
            <div>
                <div className="product-image">
                    <img className="img-fluid" src={props.image} />
                </div>
                <div className="product-details p-2">
                    <div className="fs-15 text-left">
                        <del className="fw-600 opacity-50 mr-1">$1,550.00</del>
                        <span className="fw-700 text-danger">$1,548.00</span>
                    </div>

                    <div className="rating rating-sm m-1 text-left">
                        <i className="fa fa-star product-rating rating-active" aria-hidden="true"></i>
                        <i className="fa fa-star product-rating rating-active" aria-hidden="true"></i>
                        <i className="fa fa-star product-rating rating-active" aria-hidden="true"></i>
                        <i className="fa fa-star product-rating" aria-hidden="true"></i>
                        <span className="total-rating">(12)</span>
                     </div>
                    <div className="overLap">
                        <h3 className="product-title">HP Spectre x360 13-AE517TU 8th Gen Intel Core i7 8550U 8th Gen Intel Core i7 8550U</h3>
                    </div>

                    <div className="text-left">
                    {/* + Shipping: US $2.11
 4.7448 Sold */}
                        <a href="#" className="product-store-name text-left">SuperGLX Store</a>
                    </div>

                    
                </div>

                <div className="product-cart">

                </div>
            </div>
        </div>
    )
}

export default  Product;
